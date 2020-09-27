import {Editor, Path, Point, Range, Transforms, NodeEntry} from "slate";
import {ListNode} from './types'
import {fixList} from "./util";

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
    const {deleteBackward, insertText, insertBreak} = editor

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
        insertBreak2()
        fixList(editor)
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
        let tabs = 0
        for (let c of beforeText) {
            if (c === '\t') {
                tabs++
            }
        }
        beforeText = beforeText.substr(tabs)
        const blockType = block![0].type as string
        let inList = typeof blockType === 'string' ? blockType === 'list-item' : false


        let type = SHORTCUTS[beforeText]

        if (!type && /^[1-9]\d*\./.test(beforeText)) {
            type = 'ol-item'
        }
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
                    {type: 'list-item'},
                    {match: n => Editor.isBlock(editor, n)}
                )
                list = {type: 'bulleted-list', indent: tabs, children: []}
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
                    {type: 'list-item'},
                    {match: n => Editor.isBlock(editor, n)}
                )
                list = {type: 'numbered-list', indent: tabs, children: []}
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
        console.log("editor.deleteBackward:", unit)
        deleteBackward2(unit)
        fixList(editor)
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