import { formats }  from '../src/index.js'
import { expect } from 'chai'

describe('rule-extractor', () => {
  it('returns a set of rules in a string format', () => {
    expect(formats[0].name).to.eq('desktop')
  })
})
