import expect from 'expect';
import app from './app';

describe('Running TypeScript tests in ts-node runtime with type checks', () => {
  describe('typecheck app module', () => {
    it('should return the same value that was passed', () => {
      expect(app(3)).toBe(3);
    });
  });
});

// Introduce a compile error to check if test:typecheck will fail
"not a number" as number;
