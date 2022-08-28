import { IStorageProvider } from '../models/storage';

export class StorageService {
  constructor(private storageProvider: IStorageProvider) {}

  public setItem(key: string, data: unknown) {
    this.storageProvider.setItem(key, JSON.stringify(data));
  }

  public getItem<TData>(key: string): TData | null {
    const rawData = this.storageProvider.getItem(key);
    console.log('RAW', rawData);
    return rawData ? JSON.parse(rawData) : rawData;
  }
}
