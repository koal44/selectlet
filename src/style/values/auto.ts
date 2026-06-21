import type { Cursor } from '../../selector/parser/cursor';
import { tryConsumeKeywordIn } from './keyword';

export type AutoValue = {
  type: 'auto';
};

export function tryParseAuto(c: Cursor): AutoValue | null {
  const keyword = tryConsumeKeywordIn(c, ['auto'] as const);
  return keyword === null ? null : { type: 'auto' };
}
