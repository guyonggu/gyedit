/** @jsx jsx */

import {Transforms, Editor} from 'slate'
import {jsx} from '../../index'
import {onTab} from "../../../src";

export const input = (
    <editor>
        <bulletedList indent={0}>
            <listItem>
                <anchor />
                one
            </listItem>
            <listItem>
                two
            </listItem>
        </bulletedList>
        <paragraph>dksjdsl<focus /></paragraph>
    </editor>
)

export const run = editor => {
    Editor.deleteFragment(editor)
}

export const output = (
    <editor>
        <bulletedList indent={0}>
            <listItem>
                <anchor /><focus />
            </listItem>
        </bulletedList>
    </editor>
)
