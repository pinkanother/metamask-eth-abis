import { abiERC721 } from './abiERC721';

describe('abiERC721', () => {
  it('should contain function tokenOfOwnerByIndex', () => {
    expect(abiERC721).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'tokenOfOwnerByIndex',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function tokenURI', () => {
    expect(abiERC721).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'tokenURI',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function name', () => {
    expect(abiERC721).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'totalSupply',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function symbol', () => {
    expect(abiERC721).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'symbol',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function ownerOf', () => {
    expect(abiERC721).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'ownerOf',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function supportsInterface', () => {
    expect(abiERC721).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'supportsInterface',
          type: 'function',
        }),
      ]),
    );
  });
});
