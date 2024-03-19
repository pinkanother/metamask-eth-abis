import { abiFiatTokenV2 } from './fiatTokenV2';

describe('abiFiatTokenV2', () => {
  it('should contain function uri', () => {
    expect(abiFiatTokenV2).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'increaseAllowance',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function balanceOf', () => {
    expect(abiFiatTokenV2).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'decreaseAllowance',
          type: 'function',
        }),
      ]),
    );
  });
});
