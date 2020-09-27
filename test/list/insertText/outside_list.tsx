/** @jsx jsx */

import {Transforms, Editor} from 'slate'
import {jsx} from '../../index'
import {onTab} from "../../../src";

export const input = (
    <editor>
        <numberedList start={1} indent={0}>
            <listItem>one</listItem>
            <listItem>two</listItem>
        </numberedList>
        <paragraph>
            <cursor/>
        </paragraph>
        <numberedList start={1} indent={0}>
            <listItem>three</listItem>
        </numberedList>
    </editor>
)

export const run = editor => {
    Editor.insertText(editor, '7.')
    Editor.insertText(editor, ' ')
}

export const output = (
    <editor>
        <numberedList indent={0} start={1}>
            <listItem>one</listItem>
            <listItem>two</listItem>
            <listItem><cursor /></listItem>
            <listItem>three</listItem>
        </numberedList>
    </editor>
)
