import {Editor, Path, Point, Range, Transforms} from "slate";
import {BlockElement, BlockEntry} from './types'

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

    editor.insertBreak = () => {
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
        const blockType = block![0].type
        let inList = typeof blockType === 'string' ? blockType === 'list-item' : false

        if (text === ' ') {

            let type = SHORTCUTS[beforeText]

            if (!type && /^[1-9]\d*\./.test(beforeText)) {
                type = 'ol-item'
            }
            let list
            switch (type) {
                case 'ul-item':
                    if (inList) break
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
                    break
                case 'ol-item':
                    if (inList) break
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
                    break
                default:
                    insertText(text)
            }
            return
        }

        insertText(text)
    }

    editor.deleteBackward = (unit: 'character' | 'word' | 'line' | 'block') => {
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
        const [block, path] = match as BlockEntry
        const start = Editor.start(editor, path)

        if (Point.equals(selection.anchor, start)) {
            if (block.type === 'list-item') {
                const parent = Editor.parent(editor, path)
                const listNode = parent[0] as BlockElement
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