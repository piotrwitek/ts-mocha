import expect from 'expect';
import app from './app';

describe('Running TypeScript tests in ts-node runtime without compilation', () => {
  describe('baseline app module', () => {
    it('should return the same value that was passed', () => {
      expect(app(3)).toBe(3);
    });
  });
});
