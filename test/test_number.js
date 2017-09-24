import chai from 'chai';
import Number from '../src/js/entry';

const assert = chai.assert;
describe('Number', () => {
  it('足し算のテスト', () => {
    assert.strictEqual(Number.addition(1, 2), 3);
  });
  it('引き算のテスト', () => {
    assert.strictEqual(Number.subtraction(5, 2), 3);
  });
  it('掛け算のテスト', () => {
    assert.strictEqual(Number.multiplication(1, 2), 2);
  });
  it('割り算のテスト', () => {
    assert.strictEqual(Number.division(4, 2), 2);
  });
});
