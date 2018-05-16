import test from 'ava'
import isURL from '.'

test('Not URL test', t => {
  t.false(isURL('apple'))
  t.false(isURL('/apple'))
  t.false(isURL('//apple'))
  t.false(isURL('://apple'))
})

test('Currect URL test', t => {
  t.true(isURL('a://apple'))
  t.true(isURL('a://apple://banana'))
})