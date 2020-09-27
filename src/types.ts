import { Element, Path } from 'slate'

export interface ListNode extends Element{
    type: string
    indent?: number // default 0
    start?: number  // for numbered-list, default 1
}

export interface ListItem extends Element{

}

export enum InlineType{
    'link'
}