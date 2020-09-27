import assert from 'assert'
import { fixtures } from './fixtures'
import { Editor } from 'slate'
import { createHyperscript } from 'slate-hyperscript'
import {withMarkdown} from "../src";
import {withReact} from 'slate-react'

describe('slate', () => {
    fixtures(__dirname, 'list', ({ module }) => {
        const { input, run, output } = module
        const editor = withTest(input)
        run(editor)
        assert.deepEqual(editor.children, output.children)
        assert.deepEqual(editor.selection, output.selection)
    })
    // fixtures(__dirname, 'operations', ({ module }) => {
    //     const { input, operations, output } = module
    //     const editor = withTest(input)
    //     Editor.withoutNormalizing(editor, () => {
    //         for (const op of operations) {
    //             editor.apply(op)
    //         }
    //     })
    //     assert.deepEqual(editor.children, output.children)
    //     assert.deepEqual(editor.selection, output.selection)
    // })
    // fixtures(__dirname, 'normalization', ({ module }) => {
    //     const { input, output } = module
    //     const editor = withTest(input)
    //     Editor.normalize(editor, { force: true })
    //     assert.deepEqual(editor.children, output.children)
    //     assert.deepEqual(editor.selection, output.selection)
    // })
    // fixtures(__dirname, 'transforms', ({ module }) => {
    //     const { input, run, output } = module
    //     const editor = withTest(input)
    //     run(editor)
    //     assert.deepEqual(editor.children, output.children)
    //     assert.deepEqual(editor.selection, output.selection)
    // })
})
const withTest = editor => {
    const { isInline, isVoid } = editor
    editor.isInline = element => {
        return element.inline === true ? true : isInline(element)
    }
    editor.isVoid = element => {
        return element.void === true ? true : isVoid(element)
    }
    return withMarkdown(withReact(editor))
}

const elements = {
    block: {},
    inline: {inline:true},
    bulletedList: {type: 'bulleted-list'},
    numberedList: {type: 'numbered-list'},
    listItem:{type: 'list-item'},
    paragraph:{type: 'paragraph'}
}

export const jsx = createHyperscript({
    elements
})

