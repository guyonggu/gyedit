/** @jsx jsx */

import {Transforms, Editor} from 'slate'
import {jsx} from '../../index'
import {onTab} from "../../../src";

export const input = (
    <editor>
        <bulletedList indent={0}>
            <listItem>one</listItem>
            <listItem>
                <cursor/>
                two
            </listItem>
        </bulletedList>
    </editor>
)

export const run = editor => {
    onTab(editor)
}

export const output = (
    <editor>
        <bulletedList indent={0}>
            <listItem>one</listItem>
        </bulletedList>
        <bulletedList indent={1}>
            <listItem>
                <cursor/>
                two
            </listItem>
        </bulletedList>
    </editor>
)
