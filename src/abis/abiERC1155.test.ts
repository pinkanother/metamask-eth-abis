import { abiERC1155 } from './abiERC1155';

describe('abiERC1155', () => {
  it('should contain function uri', () => {
    expect(abiERC1155).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'uri',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function balanceOf', () => {
    expect(abiERC1155).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'balanceOf',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function safeTransferFrom', () => {
    expect(abiERC1155).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'safeTransferFrom',
          type: 'function',
        }),
      ]),
    );
  });

  it('should contain function supportsInterface', () => {
    expect(abiERC1155).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'supportsInterface',
          type: 'function',
        }),
      ]),
    );
  });
});
