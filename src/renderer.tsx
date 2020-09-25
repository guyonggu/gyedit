import React, { useCallback, useMemo, useState } from 'react'
import {ListNode} from './types'

export const Element = ({ attributes, children, element }:any) => {
    switch (element.type) {
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
            attributes['data-indent'] = (element as ListNode).indent
            return <ul style={{paddingLeft: `calc(1em * ${element.indent})`}} {...attributes}>{children}</ul>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'numbered-list':
            attributes['data-indent'] = (element as ListNode).indent
            return <ol style={{paddingLeft: `calc(1em * ${element.indent})`}} {...attributes}>{children}</ol>
        default:
            return <p {...attributes}>{children}</p>
    }
}

export const Leaf = ({ attributes, children, leaf }:any) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = <code>{children}</code>
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }

    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}

