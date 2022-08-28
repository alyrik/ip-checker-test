export interface IStorageProvider {
  setItem(key: string, data: string): void;
  getItem(key: string): string | null;
}
