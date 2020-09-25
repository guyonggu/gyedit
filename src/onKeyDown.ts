import {Editor, Range, Path, Location, Transforms} from 'slate'
import {ListNode, ListItemNode} from './types'


export const onKeyDown = () => (
    e: KeyboardEvent,
    editor: Editor
) => {
    let {selection} = editor
    if (e.key === 'Tab' && selection) {
        const block = Editor.above(editor, {
            match: n => Editor.isBlock(editor, n),
        })
        if (!block) {
            return
        }
        e.preventDefault()
        if (block[0].type == 'list-item') {
            if (Range.isCollapsed(selection)) {
                const path = block[1]
                const start = Editor.start(editor, path)
                const range = {anchor: selection.anchor, focus: start}
                let beforeText = Editor.string(editor, range)
                if (beforeText.length) {
                    Editor.insertText(editor, '\t')
                    return
                }
            }
            // // move down with tab
            // const tab = !e.shiftKey;
            // if (tab) {
            moveListItemDown(editor, block[1]);
            // }
        } else {
            let p: Location = selection.anchor
            if (Range.isCollapsed(selection)) {
                p = p.path
            }
            Transforms.select(editor, p)
            Editor.insertText(editor, '\t')
            Transforms.select(editor, selection)
        }
    }
};

function moveListItemDown(editor: Editor, path: Path) {
    let entry = Editor.parent(editor, path)
    let node: ListNode = entry[0] as ListNode
    if (node.type.endsWith('-list')) {
        let ref = Editor.pathRef(editor,path)
        let pre = Editor.previous(editor, {at: path})
        let next = Editor.next(editor,{at:path})
        if (pre) {
            Transforms.splitNodes(editor, {at: path})
        }
        if (next) {
            Transforms.splitNodes(editor, {at: Path.next(ref.current!)})
        }
        path = ref.unref()!
        Transforms.setNodes(editor, {indent: node.indent + 1}, {at: Path.parent(path)})

    }
}