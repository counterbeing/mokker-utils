import { templateReader } from '../src/index.js'
import { expect } from 'chai'

describe('template-reader', () => {
  it('returns a function that can be called', () => {
    let functionFromTemplate = templateReader(
      './test/fixtures/test-template.js',
      { oneFish: 'redFish', twoFish: 'blueFish' }
    )
    let result = functionFromTemplate()
    expect(result[0]).to.equal('redFish')
    expect(result[1]).to.equal('blueFish')
  })

  it('can also return a string', () => {
    let stringFromTemplate = templateReader(
      './test/fixtures/test-template.js',
      { oneFish: 'redFish', twoFish: 'blueFish' },
      true
    )
    expect(stringFromTemplate).to.be.a('string')
  })
})
