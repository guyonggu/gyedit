import { Element, Path } from 'slate'

export interface ListNode extends Element {
    type: 'bulleted-list' | 'numbered-list',
    indent: number,
    start?: number
}

export type ListNodeEntry = [ListNode, Path]

export interface ListItemNode extends Element{
    type: 'list-item'
}