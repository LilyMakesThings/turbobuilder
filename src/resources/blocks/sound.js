import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';
import { compileVars } from '../compiler/compileVarSection.js'

const categoryPrefix = 'sound_';
const categoryColor = '#CF63CF';

function register() {
    // start playing a sound (and also it needs to load lol!!)
    registerBlock(`${categoryPrefix}startsound`, {
        message0: 'start sound %1',
        args0: [
            {
                "type": "field_input",
                "name": "SOUND",
                "text": "https://t.ly/2gHlM",
                "spellcheck": false
            },
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const SOUND = block.getFieldValue('SOUND')
        const code = `var ${compileVars.new()} = new Audio(\`${encodeURI(SOUND)}\`);
        ${compileVars.new()}.addEventListener("canplaythrough", (event) => {
            ${compileVars.new()}.play();
        });`;
        return `${code}\n`;
    })
}

export default register;
