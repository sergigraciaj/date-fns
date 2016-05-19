// global describe it
// @flow
/* eslint-env mocha */
/* global sinon */

var assert = require('power-assert')
var isThisISOYear = require('./')

describe('isThisISOYear', function () {
  beforeEach(function () {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('returns true if the given date and the current date have the same ISO week-numbering year', function () {
    var date = new Date(2013, 11 /* Dec */, 30)
    assert(isThisISOYear(date) === true)
  })

  it('returns false if the given date and the current date have different ISO week-numbering years', function () {
    var date = new Date(2014, 11 /* Dec */, 29)
    assert(isThisISOYear(date) === false)
  })

  it('accepts a string', function () {
    var date = new Date(2014, 11 /* Dec */, 28).toISOString()
    assert(isThisISOYear(date) === true)
  })

  it('accepts a timestamp', function () {
    var date = new Date(2014, 8 /* Sep */, 1).getTime()
    assert(isThisISOYear(date) === true)
  })
})

