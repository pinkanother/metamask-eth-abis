import { abiERC20 } from './abiERC20';

describe('abiERC20', () => {
  it('should contain function balanceOf', () => {
    expect(abiERC20).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'balanceOf',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function decimals', () => {
    expect(abiERC20).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'decimals',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function totalSupply', () => {
    expect(abiERC20).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'totalSupply',
          type: 'function',
        }),
      ]),
    );
  });
});
