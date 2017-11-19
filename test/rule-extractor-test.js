import { ruleExtractor }  from '../src/index.js'
import { expect } from 'chai'

describe('rule-extractor', () => {
  it('returns a set of rules in a string format', () => {
    let result = ruleExtractor('./test/fixtures/fake-rules.txt')
    expect(result).to.equal(
      '#AdBox300, .footer-advertising-area, .__zinit .__y_item, ' +
      '.trc_rbox .syndicatedItem, #content > #center > .dose > .dosesingle'
    )
  })
})
