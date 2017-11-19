import fs from 'fs'

const formats = JSON.parse(fs.readFileSync('./src/formats.json', 'utf8'))

export default formats
