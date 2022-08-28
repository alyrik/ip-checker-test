import { StorageService } from './StorageService';
import { IStorageProvider } from '../models/storage';

class StorageMock implements IStorageProvider {
  getItem = jest.fn();
  setItem = jest.fn();
}

describe('StorageService', () => {
  const storageMock = new StorageMock();
  const itemKey = 'key';
  const values = ['hello', true, false, 0, 1, { a: 'b' }];

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test.each(values.map((value) => [JSON.stringify(value), value]))(
    'gets item',
    (inputData, expectedData) => {
      storageMock.getItem.mockReturnValue(inputData);
      const storageService = new StorageService(storageMock);

      const data = storageService.getItem(itemKey);

      expect(data).toStrictEqual(expectedData);
    },
  );

  test.each(values.map((value) => [value, JSON.stringify(value)]))(
    'sets item',
    (inputData, expectedData) => {
      const storageService = new StorageService(storageMock);

      storageService.setItem(itemKey, inputData);

      expect(storageMock.setItem).toHaveBeenCalledWith(itemKey, expectedData);
    },
  );
});
