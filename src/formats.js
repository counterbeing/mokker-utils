import fs from 'fs'
import { resolve } from 'path'

let file = resolve(__dirname, '..', 'formats.json')
const formats = JSON.parse(fs.readFileSync(file, 'utf8'))

export default formats
