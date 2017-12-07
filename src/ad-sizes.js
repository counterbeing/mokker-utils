import fs from 'fs'
import { resolve } from 'path'

let file = resolve(__dirname, '..', 'ad-sizes.json')
const adSizes = JSON.parse(fs.readFileSync(file, 'utf8'))

export default adSizes
