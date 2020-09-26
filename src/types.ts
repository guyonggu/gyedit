import { Element, Path } from 'slate'

export interface BlockElement extends Element{
    type: string
    indent?: number
    start?: number
}

export type BlockEntry = [BlockElement, Path]

export enum InlineType{
    'link'
}