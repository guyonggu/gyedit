import {Editor, Range, Path, Location, Transforms} from 'slate'
import {ListNode} from './types'
import {fixList} from "./util";


export const onKeyDown = () => (
    e: React.KeyboardEvent<HTMLDivElement>,
    editor: Editor
) => {
    let {selection} = editor
    if (!selection) return
    if (e.key === 'Tab') {
        e.preventDefault()
        onTab(editor)
        // Editor.insertText(editor,'\t')
    }
};
export const onTab = (editor:Editor):void => {
    const selection = editor.selection!
    const entry = Editor.above(editor, {
        match: n => Editor.isBlock(editor, n),
    })
    if (!entry) {
        return
    }
    if (entry[0].type == 'list-item') {
        if (Range.isCollapsed(selection)) {
            const path = entry[1]
            const start = Editor.start(editor, path)
            const range = {anchor: selection.anchor, focus: start}
            let beforeText = Editor.string(editor, range)
            if (beforeText.length) {
                Editor.insertText(editor, '    ')
                return
            }
        }
        // // move down with tab
        // const tab = !e.shiftKey;
        // if (tab) {
        moveListItemDown(editor, entry[1]);
        fixList(editor)
        // }
    } else {
        let p: Location = selection.anchor
        if (Range.isExpanded(selection)) {
            p = Editor.start(editor, p.path)
        }
        const ref = Editor.rangeRef(editor, selection)
        Transforms.select(editor, p)
        Editor.insertText(editor, '    ')
        Transforms.select(editor, ref.unref()!)
    }
}
function moveListItemDown(editor: Editor, path: Path) {
    let entry = Editor.parent(editor, path) as [ListNode, Path]
    let node = entry[0]
    if (!node.type.endsWith('-list')) {
        throw new Error(`moveListItemDown, not a list at: ${entry[1]}`)
    }
    let ref = Editor.pathRef(editor, path)
    let pre = Editor.previous(editor, {at: path})
    let next = Editor.next(editor, {at: path})
    if (pre) {
        Transforms.splitNodes(editor, {at: path})
    }
    if (next) {
        Transforms.splitNodes(editor, {at: Path.next(ref.current!)})
    }
    path = ref.unref()!
    const indent = node.indent ? node.indent + 1 : 1
    Transforms.setNodes(editor, {indent}, {at: Path.parent(path)})


}