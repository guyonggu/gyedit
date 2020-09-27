/** @jsx jsx */

import {Transforms, Editor} from 'slate'
import {jsx} from '../../index'

export const input = (
    <editor>
        <numberedList indent={0} start={1}>
            <listItem>one</listItem>
        </numberedList>
        <paragraph>
            <cursor/>
            two
        </paragraph>
        <numberedList indent={0} start={1}>
            <listItem>three</listItem>
        </numberedList>
    </editor>
)

export const run = editor => {
    Editor.deleteBackward(editor)
}

export const output = (
    <editor>
        <numberedList indent={0} start={1}>
            <listItem>one
                <cursor/>
                two
            </listItem>
            <listItem>three</listItem>
        </numberedList>
    </editor>
)
