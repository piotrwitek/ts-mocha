export default function(x: number): number {
  return x;
}

export { get10 } from '@/helper';

export function get10Factory(): Promise<() => number> {
  return import('@/helper').then(helper => helper.get10);
}
