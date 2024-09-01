export interface IProvider {
  isSite(): boolean;
  inject(): void;
}
