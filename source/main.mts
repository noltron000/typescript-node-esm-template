import JSON5 from 'json5'
import {readFile} from '@tools/paths.mts'

const buffer = await readFile('@data/test-data.json5')
const testData = JSON5.parse(buffer.toString( ))

console.table(testData)
