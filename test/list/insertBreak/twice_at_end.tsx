/** @jsx jsx */

import { Transforms, Editor } from 'slate'
import { jsx } from '../../index'

export const input = (
    <editor>
        <bulletedList start={1} indent={0}>
            <listItem>one<cursor /></listItem>
        </bulletedList>
    </editor>
)

export const run = editor => {
    editor.insertBreak()
    editor.insertBreak()
}

export const output = (
    <editor>
        <bulletedList start={1} indent={0}>
            <listItem>one</listItem>
        </bulletedList>
        <paragraph indent={0}><cursor /></paragraph>
    </editor>
)
