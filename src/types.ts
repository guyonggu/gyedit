import { Element } from 'slate'

export interface ListNode extends Element {
    type: 'ul' | 'ol',
    indent: number,
    start: number
}

export interface ListItemNode extends Element{
    type: 'li'
}