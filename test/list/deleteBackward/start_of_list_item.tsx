/** @jsx jsx */

import {Transforms, Editor} from 'slate'
import {jsx} from '../../index'

export const input = (
    <editor>
        <bulletedList indent={0}>
            <listItem>one</listItem>
            <listItem>
                <cursor/>
                two
            </listItem>
            <listItem>three</listItem>
        </bulletedList>
    </editor>
)

export const run = editor => {
    Editor.deleteBackward(editor)
}

export const output = (
    <editor>
        <bulletedList indent={0}>
            <listItem>one</listItem>
        </bulletedList>
        <paragraph>
            <cursor/>
            two
        </paragraph>
        <bulletedList indent={0}>
            <listItem>three</listItem>
        </bulletedList>
    </editor>
)
