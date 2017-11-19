import ruleExtractor from './rule-extractor'
import formats from './formats'
import templateReader from './template-reader'

let hi = {hello: 'there'}

let thing = {...hi}
console.log(thing)

export {
  ruleExtractor,
  formats,
  templateReader
}
