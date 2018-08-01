import { getNumber as gn } from '@/helper';

export const getNumber = gn;

export function getAdder(): Promise<(a: number, b: number) => number> {
  return import('@util').then((u) => u.add);
}
