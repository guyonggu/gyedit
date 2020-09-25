import {Editor, Path, Point, Range, Transforms} from "slate";
import {ListNode, ListNodeEntry} from './types'
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
    const {deleteBackward, insertText} = editor

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
            let list:ListNode
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
                    list = {type: 'bulleted-list', indent: tabs+1, children: []}
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
                    list = {type: 'numbered-list', indent: tabs+1, children: []}
                    Transforms.wrapNodes(editor, list, {
                        match: n => n.type === 'list-item',
                    })
                    break
                default:
                    insertText(text)
            }
            return
        } else if (text === '\t' && inList && beforeText === '') {
            const [listNode] = Editor.parent(editor, path) as ListNodeEntry
            console.log(listNode.type)
            if (listNode.type === 'bulleted-list' || listNode.type === 'numbered-list') {
                listNode.indent++
            }
            Transforms.select(editor, path)
            return
        }

        insertText(text)
    }

    editor.deleteBackward = (...args) => {
        const {selection} = editor

        if (selection && Range.isCollapsed(selection)) {
            const match = Editor.above(editor, {
                match: n => Editor.isBlock(editor, n),
            })

            if (match) {
                const [block, path] = match
                const start = Editor.start(editor, path)

                if (
                    block.type !== 'paragraph' &&
                    Point.equals(selection.anchor, start)
                ) {
                    if (block.type === 'list-item') {
                        const parent = Editor.parent(editor,path)
                        const listNode = parent[0] as ListNode
                        if(listNode && (listNode.indent > 1)){
                            Transforms.setNodes(editor, {indent: listNode.indent - 1}, {at: parent[1]})
                        }else {
                            Transforms.setNodes(editor, {type: 'paragraph'})
                            Transforms.unwrapNodes(editor, {
                                match: n => n.type === 'bulleted-list',
                                split: true,
                            })
                        }
                    }else{
                        Transforms.setNodes(editor, {type: 'paragraph'})
                    }

                    return
                }
            }

            deleteBackward(...args)
        }
    }

    return editor
}

