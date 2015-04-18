/* global it, describe */

import caseDot from '../case-dot'
import assert from 'assert'

describe('case-dot', function () {
  var tests = [
      ['T', ['T']],
      ['t', ['t']],
      ['Test', ['Test']],
      ['test', ['test']],
      ['this.Is.A.Test', ['this', 'Is', 'A', 'Test']],
      ['This.Is.A.Test', ['This', 'Is', 'A', 'Test']],
      ['THIS.Is.A.Test', ['THIS', 'Is', 'A', 'Test']]
    ]

  describe('#parse()', function () {
    tests.forEach(function (pair) {
      var name = pair[0]
      var parsed = pair[1]

      it(JSON.stringify(name) + ' -> ' + JSON.stringify(parsed), function () {
        assert.deepEqual(caseDot.parse(name), parsed)
      })
    })
  })

  describe('#stringify()', function () {
    tests.forEach(function (pair) {
      var name = pair[0]
      var parsed = pair[1]

      it(JSON.stringify(parsed) + ' -> ' + JSON.stringify(name), function () {
        assert.equal(caseDot.stringify(parsed), name)
      })
    })
  })

  describe('#is()', function () {
    tests.forEach(function (pair) {
      var name1 = pair[0]
      var parsed = pair[1]
      var name2 = pair[1].join('#')
      var val1 = parsed.length > 1

      it(JSON.stringify(name1) + ' (' + val1 + ')', function () {
        assert.equal(caseDot.is(name1), val1)
      })
      it(JSON.stringify(name2) + ' (false)', function () {
        assert.equal(caseDot.is(name2), false)
      })
    })
  })
})
