import * as expect from 'expect';
import app from './app';

describe('Running TypeScript tests in ts-node runtime without compilation', () => {
  describe('node esmodules support test', () => {
    it('should return the formatted date using node package with type module', () => {
      expect(app()).toBe('2022-06-06');
    });
  });
});
