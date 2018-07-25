import * as expect from 'expect';
import app, { get10, get10Factory } from './app';

describe('Running TypeScript tests in ts-node runtime without compilation', () => {
  describe('app module', () => {
    it('should return the same value that was passed', () => {
      expect(app(3)).toBe(3);
    });
    it('should provide a function for getting the value 10', () => {
      expect(get10()).toBe(10);
    });
    it('should provide a factory function for getting the value 10', () => {
      return get10Factory().then(get => expect(get()).toBe(10));
    });
  });
});
