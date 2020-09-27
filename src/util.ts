import {Path, Node, Editor, Transforms, NodeEntry, Ancestor} from 'slate'
import {ListNode} from "./types";

export const getListStart = (editor: Editor, path: Path): number[] => {
    let listStart: number[] = []
    let [node] = Editor.node(editor, path)
    if (!isListNode(node)){
        return listStart
    }
    let curPath: Path = path
    let options = {
        index: 0
    }
    while (isListNode(node) && options.index >= 0) {
        computeListStart(listStart, node, options)
        const pre: any = Editor.previous(editor, {at: curPath})
        if (!pre) {
            break
        }
        [node, curPath] = pre
    }
    return listStart
}

export const isListNode = (node: Node | undefined): node is ListNode => {
    if (!node || !node.type || !(node.type as string).endsWith('-list')) {
        return false
    }
    return true
}

const computeListStart = (listStart: number[], node: ListNode, options: { index: number } = {index: 0}): void => {
    let indent = node.indent || 0
    let start = node.start || 1
    if (listStart.length && indent > options.index) {
        return
    }
    if (!listStart.length) {
        for (let i = 0; i <= indent; i++) {
            listStart.push(1)
        }
    }
    if (node.type === 'numbered-list') {
        listStart[indent] = start + node.children.length
    }
    options.index = indent - 1
}

export const fixList = (editor:Editor, path?:Path): void => {
    let entry:NodeEntry | undefined
    if (!path){
        entry = Editor.above(editor, {
            match: n => Editor.isBlock(editor,n)
        })
    }else{
        entry = Editor.node(editor,path)
    }
    if (!entry){
        return
    }

    if (entry[0].type === 'list-item') {
        const [node, path] = Editor.parent(editor,entry[1]) as NodeEntry<ListNode>
        const [preNode, prePath] = Editor.previous(editor, {at: path}) || [undefined, undefined]
        const ref = Editor.pathRef(editor, path)
        console.log("fix:",node.type, "at:", path)
        // merge left
        if (isListNode(preNode) && preNode.type === node.type && preNode.indent === node.indent) {
            Transforms.mergeNodes(editor, {at: path})
        }
        //merge right
        const [nextNode, nextPath] = Editor.next(editor, {at:ref.current!}) || [undefined, undefined]
        if (isListNode(nextNode) && nextNode.type === node.type && nextNode.indent === node.indent){
            Transforms.mergeNodes(editor, {at: nextPath})
        }

        let listStart:number[] = []
        let updatePath: Path
        if (prePath && isListNode(preNode)){
            listStart = getListStart(editor, prePath)
            updatePath = Path.next(prePath)
        }else{
            updatePath = ref.unref()!
        }
        console.log("updateListStart:", listStart, "at:", updatePath)
        updateListStart(editor, updatePath, listStart)
    }else {
        const next = Editor.next(editor, {at:entry[1]})
        if (next && isListNode(next[0])){
            console.log("updateListStart:", [], "at:", next[1])
            updateListStart(editor, next[1], [])
        }
    }
}

const updateListStart = (editor:Editor, path:Path, listStart:number[]):void => {
    if (!Node.has(editor,path)){
        return
    }
    let [node] = Editor.node(editor, path)
    while (isListNode(node)){
        const indent = node.indent || 0
        const start = listStart[indent] || 1

        if (node.type === 'numbered-list') {
            Transforms.setNodes(editor,{start}, {at:path})
        }
        listStart.splice(indent+1)

        if (node.type === 'numbered-list'){
            listStart[indent] = start + node.children.length
        }else{
            listStart[indent] = 1
        }

        // node.start = listStart[node.indent]
        const entry = Editor.next(editor, {at:path})
        if (!entry){
            break
        }
        [node, path] = entry
    }
}