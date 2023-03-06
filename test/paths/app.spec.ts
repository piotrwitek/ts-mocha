import expect from 'expect';
import { getAdder, getNumber } from './app';

describe('Running TypeScript tests in ts-node runtime without compilation', () => {
  describe('paths app module', () => {
    it('provides adder that adds two numbers', () => {
      return getAdder().then((add) => {
        expect(add(2, 3)).toBe(5);
      });
    });
    it('provides function that should return the same value that was passed', () => {
      expect(getNumber(3)).toBe(3);
    });
  });
});
