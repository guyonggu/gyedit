import {Editor, Path, Point, Range, Element, Text, Transforms, NodeEntry} from "slate";
import {ListNode} from './types'
import {fixList, isListNode} from "./util";

const SHORTCUTS = {
    '*': 'ul-item',
    '-': 'ul-item',
    '+': 'ul-item',
    '>': 'block-quote',
    '#': 'heading-one',
    '##': 'heading-two',
    '###': 'heading-three',
    '####': 'heading-four',
    '#####': 'heading-five',
    '######': 'heading-six',
}

export const withMarkdown = (editor: Editor) => {
    const {deleteBackward, insertText, insertBreak, deleteFragment, normalizeNode} = editor

    const insertBreak2 = () => {
        let handled = false
        const {selection} = editor

        if (!selection || Range.isExpanded(selection)) {
            insertBreak()
            return
        }
        const block = Editor.above(editor, {
            match: n => Editor.isBlock(editor, n),
        })
        if (!block || Editor.isEditor(block[0])) {
            insertBreak()
            return
        }
        const parent = Editor.parent(editor, block[1])
        if (!parent || Editor.isEditor(parent[0])) {
            insertBreak()
            return
        }
        const text = Editor.string(editor, block[1])
        if (text) {
            insertBreak()
            return
        }
        const blockPath: Path = block[1]
        let indent = 0
        if (typeof parent[0].indent === "number") {
            indent = parent[0].indent > 1 ? parent[0].indent - 1 : 0
        }
        Transforms.setNodes(editor, {type: 'paragraph', indent}, {at: blockPath})
        // if it is the last child
        if (blockPath[blockPath.length - 1] === parent[0].children.length - 1) {
            Transforms.liftNodes(editor, {at: blockPath})
            return
        }
    }
    editor.insertBreak = () => {
        Editor.withoutNormalizing(editor, () => {
            insertBreak2()
            fixList(editor)
        })
    }
    editor.insertText = (text: string) => {
        const {selection} = editor
        if ((text !== ' ') || !selection || !Range.isCollapsed(selection)) {
            insertText(text)
            return
        }

        const {anchor} = selection
        const block = Editor.above(editor, {
            match: n => Editor.isBlock(editor, n),
        })
        const path = block ? block[1] : []
        const start = Editor.start(editor, path)
        const range = {anchor, focus: start}
        let beforeText = Editor.string(editor, range)
        const blockType = block![0].type as string
        let inList = typeof blockType === 'string' ? blockType === 'list-item' : false


        let type = SHORTCUTS[beforeText]

        if (!type && /^[1-9]\d*\./.test(beforeText)) {
            type = 'ol-item'
        }
        const indent = block![0].indent || 0
        let list
        switch (type) {
            case 'ul-item':
                if (inList) {
                    insertText(text)
                    break
                }
                Transforms.select(editor, range)
                Transforms.delete(editor)
                Transforms.setNodes(
                    editor,
                    {type: 'list-item', indent:null},
                    {match: n => Editor.isBlock(editor, n)}
                )
                list = {type: 'bulleted-list', indent, children: []}
                Transforms.wrapNodes(editor, list, {
                    match: n => n.type === 'list-item',
                })
                fixList(editor)
                break
            case 'ol-item':
                if (inList) {
                    insertText(text)
                    break
                }
                const found = beforeText.match(/^([\t]*)\d+\./)
                Transforms.select(editor, range)
                Transforms.delete(editor)
                Transforms.setNodes(
                    editor,
                    {type: 'list-item', indent:null},
                    {match: n => Editor.isBlock(editor, n)}
                )
                list = {type: 'numbered-list', indent, start: 1, children: []}
                Transforms.wrapNodes(editor, list, {
                    match: n => n.type === 'list-item',
                })
                fixList(editor)
                break
            case 'block-quote':
                if (inList || blockType !== 'paragraph') {
                    insertText(text)
                    break
                }
                let parent = Editor.above(editor, {match: n => n.type === 'block-quote'})
                if (parent) {
                    insertText(text)
                    break
                }
                Transforms.select(editor, range)
                Transforms.delete(editor)
                Transforms.wrapNodes(editor, {type: 'block-quote', children: []}, {
                    match: n => n.type === 'paragraph'
                })
                break
            default:
                insertText(text)
        }
        return
    }

    const deleteBackward2 = (unit: 'character' | 'word' | 'line' | 'block') => {
        console.log("editor.deleteBackward:", unit)
        const {selection} = editor

        if (!selection || Range.isExpanded(selection)) {
            deleteBackward(unit)
            return
        }
        const match = Editor.above(editor, {
            match: n => Editor.isBlock(editor, n),
        })

        if (!match || Editor.isEditor(match[0])) {
            deleteBackward(unit)
            return
        }
        const [block, path] = match as NodeEntry<ListNode>
        const start = Editor.start(editor, path)

        if (Point.equals(selection.anchor, start)) {
            if (block.type === 'list-item') {
                const [listNode] = Editor.parent(editor, path) as NodeEntry<ListNode>
                if (listNode && (listNode.indent as number > 0)) {
                    Editor.withoutNormalizing(editor, () => {
                        Transforms.wrapNodes(editor, {
                            type: listNode.type,
                            indent: listNode.indent! - 1,
                            children: []
                        }, {at: path})
                        Transforms.liftNodes(editor, {at: path})
                    })
                } else {
                    Transforms.setNodes(editor, {type: 'paragraph'})
                    Transforms.unwrapNodes(editor, {
                        match: n => (typeof n.type === 'string' && n.type.endsWith('-list')),
                        split: true,
                    })
                    // deleteBackward(unit)
                }
            } else if (block.type === 'paragraph') {
                if (block.indent && block.indent > 0) {
                    Transforms.setNodes(editor, {indent: block.indent - 1}, {at: path})
                    return
                } else {
                    deleteBackward(unit)
                }
            } else {
                Transforms.setNodes(editor, {type: 'paragraph'})
            }
            return
        } // end if at start
        deleteBackward(unit)
    }

    editor.deleteBackward = (unit: 'character' | 'word' | 'line' | 'block') => {
        Editor.withoutNormalizing(editor, () => {
            deleteBackward2(unit)
            fixList(editor)
        })
    }

    editor.deleteFragment = () => {
        // console.log("editor.deleteFragment:")
        deleteFragment()
    }
    editor.normalizeNode = (entry: NodeEntry) => {
        if (Element.isElement(entry[0]) && entry[0].type !== 'list-item') {
            const [pNode] = Editor.parent(editor, entry[1])!
            if (isListNode(pNode)) {
                Transforms.setNodes(editor, {type: 'list-item'}, {at: entry[1]})
            }
        }
        normalizeNode(entry)
    }

    return editor
}

const beforeTextInBlock = (editor: Editor): string => {
    const {selection} = editor
    if (!selection) {
        return ''
    }
    const block = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
    })
    const path = block ? block[1] : []
    const start = Editor.start(editor, path)
    const range = {anchor: Range.start(editor.selection!), focus: start}
    let beforeText = Editor.string(editor, range)
    return beforeText
}
//
// Transforms.delete =(
//     editor: Editor,
//     options: {
//     at?: Location
//     distance?: number
//     unit?: 'character' | 'word' | 'line' | 'block'
//     reverse?: boolean
//     hanging?: boolean
//     voids?: boolean
// } = {}
// ):void => {
//     Editor.withoutNormalizing(editor, () => {
//         const {
//             reverse = false,
//             unit = 'character',
//             distance = 1,
//             voids = false,
//         } = options
//         let { at = editor.selection, hanging = false } = options
//
//         if (!at) {
//             return
//         }
//
//         if (Range.isRange(at) && Range.isCollapsed(at)) {
//             at = at.anchor
//         }
//
//         if (Point.isPoint(at)) {
//             const furthestVoid = Editor.void(editor, { at, mode: 'highest' })
//
//             if (!voids && furthestVoid) {
//                 const [, voidPath] = furthestVoid
//                 at = voidPath
//             } else {
//                 const opts = { unit, distance }
//                 const target = reverse
//                     ? Editor.before(editor, at, opts) || Editor.start(editor, [])
//                     : Editor.after(editor, at, opts) || Editor.end(editor, [])
//                 at = { anchor: at, focus: target }
//                 hanging = true
//             }
//         }
//
//         if (Path.isPath(at)) {
//             Transforms.removeNodes(editor, { at, voids })
//             return
//         }
//
//         if (Range.isCollapsed(at)) {
//             return
//         }
//
//         if (!hanging) {
//             at = Editor.unhangRange(editor, at, { voids })
//         }
//
//         let [start, end] = Range.edges(at)
//         const startBlock = Editor.above(editor, {
//             match: n => Editor.isBlock(editor, n),
//             at: start,
//             voids,
//         })
//         const endBlock = Editor.above(editor, {
//             match: n => Editor.isBlock(editor, n),
//             at: end,
//             voids,
//         })
//         const isAcrossBlocks =
//             startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1])
//         const isSingleText = Path.equals(start.path, end.path)
//         const startVoid = voids
//             ? null
//             : Editor.void(editor, { at: start, mode: 'highest' })
//         const endVoid = voids
//             ? null
//             : Editor.void(editor, { at: end, mode: 'highest' })
//
//         // If the start or end points are inside an inline void, nudge them out.
//         if (startVoid) {
//             const before = Editor.before(editor, start)
//
//             if (
//                 before &&
//                 startBlock &&
//                 Path.isAncestor(startBlock[1], before.path)
//             ) {
//                 start = before
//             }
//         }
//
//         if (endVoid) {
//             const after = Editor.after(editor, end)
//
//             if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
//                 end = after
//             }
//         }
//
//         // Get the highest nodes that are completely inside the range, as well as
//         // the start and end nodes.
//         const matches: NodeEntry[] = []
//         let lastPath: Path | undefined
//
//         for (const entry of Editor.nodes(editor, { at, voids })) {
//             const [node, path] = entry
//
//             if (lastPath && Path.compare(path, lastPath) === 0) {
//                 continue
//             }
//
//             if (
//                 (!voids && Editor.isVoid(editor, node)) ||
//                 (!Path.isCommon(path, start.path) && !Path.isCommon(path, end.path))
//             ) {
//                 matches.push(entry)
//                 lastPath = path
//             }
//         }
//
//         const pathRefs = Array.from(matches, ([, p]) => Editor.pathRef(editor, p))
//         const startRef = Editor.pointRef(editor, start)
//         const endRef = Editor.pointRef(editor, end)
//
//         if (!isSingleText && !startVoid) {
//             const point = startRef.current!
//             const [node] = Editor.leaf(editor, point)
//             const { path } = point
//             const { offset } = start
//             const text = node.text.slice(offset)
//             editor.apply({ type: 'remove_text', path, offset, text })
//         }
//
//         for (const pathRef of pathRefs) {
//             const path = pathRef.unref()!
//             console.log("remove not at:", path)
//             Transforms.removeNodes(editor, { at: path, voids })
//         }
//
//         if (!endVoid) {
//             const point = endRef.current!
//             const [node] = Editor.leaf(editor, point)
//             const { path } = point
//             const offset = isSingleText ? start.offset : 0
//             const text = node.text.slice(offset, end.offset)
//             editor.apply({ type: 'remove_text', path, offset, text })
//         }
//
//         if (
//             !isSingleText &&
//             isAcrossBlocks &&
//             endRef.current &&
//             startRef.current
//         ) {
//             console.log("merge node at:", endRef.current)
//             Transforms.mergeNodes(editor, {
//                 at: endRef.current,
//                 hanging: true,
//                 voids,
//             })
//         }
//
//         const point = endRef.unref() || startRef.unref()
//
//         if (options.at == null && point) {
//             Transforms.select(editor, point)
//         }
//     })
// }
//
// Transforms.mergeNodes = (
//     editor: Editor,
//     options: {
//     at?: Location
//     match?: (node: Node) => boolean
//     mode?: 'highest' | 'lowest'
//     hanging?: boolean
//     voids?: boolean
// } = {}
// ) => {
//     Editor.withoutNormalizing(editor, () => {
//         let { match, at = editor.selection } = options
//         const { hanging = false, voids = false, mode = 'lowest' } = options
//
//         if (!at) {
//             return
//         }
//
//         if (match == null) {
//             if (Path.isPath(at)) {
//                 const [parent] = Editor.parent(editor, at)
//                 match = n => parent.children.includes(n)
//             } else {
//                 match = n => Editor.isBlock(editor, n)
//             }
//         }
//
//         if (!hanging && Range.isRange(at)) {
//             at = Editor.unhangRange(editor, at)
//         }
//
//         if (Range.isRange(at)) {
//             if (Range.isCollapsed(at)) {
//                 at = at.anchor
//             } else {
//                 const [, end] = Range.edges(at)
//                 const pointRef = Editor.pointRef(editor, end)
//                 Transforms.delete(editor, { at })
//                 at = pointRef.unref()!
//
//                 if (options.at == null) {
//                     Transforms.select(editor, at)
//                 }
//             }
//         }
//
//         const [current] = Editor.nodes(editor, { at, match, voids, mode })
//         const prev = Editor.previous(editor, { at, match, voids, mode })
//
//         if (!current || !prev) {
//             return
//         }
//
//         const [node, path] = current
//         const [prevNode, prevPath] = prev
//
//         if (path.length === 0 || prevPath.length === 0) {
//             return
//         }
//
//         const newPath = Path.next(prevPath)
//         const commonPath = Path.common(path, prevPath)
//         const isPreviousSibling = Path.isSibling(path, prevPath)
//         const levels = Array.from(Editor.levels(editor, { at: path }), ([n]) => n)
//             .slice(commonPath.length)
//             .slice(0, -1)
//
//         // Determine if the merge will leave an ancestor of the path empty as a
//         // result, in which case we'll want to remove it after merging.
//         const emptyAncestor = Editor.above(editor, {
//             at: path,
//             mode: 'highest',
//             match: n =>
//                 levels.includes(n) && Element.isElement(n) && n.children.length === 1,
//         })
//
//         const emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1])
//         let properties
//         let position
//
//         // Ensure that the nodes are equivalent, and figure out what the position
//         // and extra properties of the merge will be.
//         if (Text.isText(node) && Text.isText(prevNode)) {
//             const { text, ...rest } = node
//             position = prevNode.text.length
//             properties = rest as Partial<Text>
//         } else if (Element.isElement(node) && Element.isElement(prevNode)) {
//             const { children, ...rest } = node
//             position = prevNode.children.length
//             properties = rest as Partial<Element>
//         } else {
//             throw new Error(
//                 `Cannot merge the node at path [${path}] with the previous sibling because it is not the same kind: ${JSON.stringify(
//                     node
//                 )} ${JSON.stringify(prevNode)}`
//             )
//         }
//
//         // If the node isn't already the next sibling of the previous node, move
//         // it so that it is before merging.
//         if (!isPreviousSibling) {
//             console.log("In merge, movNodes from ", path, "to", newPath)
//             Transforms.moveNodes(editor, { at: path, to: newPath, voids })
//         }
//
//         // If there was going to be an empty ancestor of the node that was merged,
//         // we remove it from the tree.
//         if (emptyRef) {
//             console.log("In merge, remove node at:", emptyRef.current)
//             Transforms.removeNodes(editor, { at: emptyRef.current!, voids })
//         }
//
//         // If the target node that we're merging with is empty, remove it instead
//         // of merging the two. This is a common rich text editor behavior to
//         // prevent losing formatting when deleting entire nodes when you have a
//         // hanging selection.
//         if (
//             (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode)) ||
//             (Text.isText(prevNode) && prevNode.text === '')
//         ) {
//             console.log("In merge, remove2", prevNode.type, "node at:", prevPath)
//             Transforms.removeNodes(editor, { at: prevPath, voids })
//         } else {
//             editor.apply({
//                 type: 'merge_node',
//                 path: newPath,
//                 position,
//                 properties,
//             })
//         }
//
//         if (emptyRef) {
//             emptyRef.unref()
//         }
//     })
// }