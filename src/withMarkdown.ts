import {Editor, Point, Range, Transforms} from "slate";

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

export const withMarkdown = editor => {
    const { deleteBackward, insertText } = editor

    editor.insertText = text => {
        const { selection } = editor

        if (text === ' ' && selection && Range.isCollapsed(selection)) {
            const { anchor } = selection
            const block = Editor.above(editor, {
                match: n => Editor.isBlock(editor, n),
            })
            const path = block ? block[1] : []
            const start = Editor.start(editor, path)
            const range = { anchor, focus: start }
            const beforeText = Editor.string(editor, range)
            let type = SHORTCUTS[beforeText]

            if (!type && /^([\t]*)\d+\./.test(beforeText)){
                type = 'ol-item'
            }
            let list
            const blockType = block[0].type
            console.log("blockType",blockType)
            let inList = typeof blockType === 'string' ? blockType.endsWith('-list') || blockType === 'list-item': false
            switch (type) {
                case 'ul-item':
                    if(inList) break
                    Transforms.select(editor, range)
                    Transforms.delete(editor)
                    Transforms.setNodes(
                        editor,
                        { type: 'list-item'},
                        { match: n => Editor.isBlock(editor, n) }
                    )
                    list = { type: 'bulleted-list', children: [] }
                    Transforms.wrapNodes(editor, list, {
                        match: n => n.type === 'list-item',
                    })
                    break
                case 'ol-item':
                    if(inList) break
                    const found = beforeText.match(/^([\t]*)\d+\./)
                    const indent = found[1].length
                    Transforms.select(editor, range)
                    Transforms.delete(editor)
                    Transforms.setNodes(
                        editor,
                        { type: 'list-item' },
                        { match: n => Editor.isBlock(editor, n) }
                    )
                    list = { type: 'numbered-list', children: [] }
                    Transforms.wrapNodes(editor, list, {
                        match: n => n.type === 'list-item',
                    })
                    break
                default:
                    insertText(text)

                return
            }
        }

        insertText(text)
    }

    editor.deleteBackward = (...args) => {
        const { selection } = editor

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
                    Transforms.setNodes(editor, { type: 'paragraph' })

                    if (block.type === 'list-item') {
                        Transforms.unwrapNodes(editor, {
                            match: n => n.type === 'bulleted-list',
                            split: true,
                        })
                    }

                    return
                }
            }

            deleteBackward(...args)
        }
    }

    return editor
}