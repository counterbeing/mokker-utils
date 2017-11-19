import fs from 'fs'
import _ from 'lodash'

function templateReader(templateFile, replacements, string=false) {
  let template = fs.readFileSync(templateFile).toString()
  let compiled = _.template(template)
  let asString = compiled(replacements)
  if(string) return asString
  return eval(asString)
}

export default templateReader
