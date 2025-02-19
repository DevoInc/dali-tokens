import { describe, it, expect } from 'vitest';
import type { TransformedToken } from 'style-dictionary/types';

import { FIGMA_TOKENS_CAT, TOKENS_TIER } from '../../constants';
import { filter } from './filter';

describe('filters', () => {
  describe('isFigmaBase', () => {
    describe('matcher', () => {
      const cases: [string, TransformedToken, boolean][] = [
        [
          'true',
          {
            original: { value: '' },
            filePath: '',
            isSource: false,
            path: [],
            name: '',
            value: '',
            attributes: {
              tier: TOKENS_TIER.FIGMA,
              figmaType: FIGMA_TOKENS_CAT.SIZE,
            },
          },
          true,
        ],
        [
          'false',
          {
            original: { value: '' },
            filePath: '',
            isSource: false,
            path: [],
            name: '',
            value: '',
            attributes: {
              tier: TOKENS_TIER.BRAND,
            },
          },
          false,
        ],
      ];

      it.each(cases)('%s', (_title, token, expected) => {
        expect(filter(token, {})).toEqual(expected);
      });
    });
  });
});
