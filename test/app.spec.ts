import * as expect from 'expect';
import app from './app';

describe('Running TypeScript tests in ts-node runtime without compilation', () => {
  it('app module should return same value that was passed', () => {
    expect(app(3)).toBe(3);
  });
});
