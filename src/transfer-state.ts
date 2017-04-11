// angular
import { Injectable } from '@angular/core';

@Injectable()
export class TransferState {
  private map: Map<string, any>;

  constructor() {
    this.map = new Map<string, any>();
  }

  keys(): any {
    return this.map.keys();
  }

  get(key: string): any {
    return this.map.get(key);
  }

  set(key: string, value: any): Map<string, any> {
    return this.map.set(key, value);
  }

  toJson(): any {
    const obj = {};
    Array.from(this.keys())
      .forEach((key: string) => {
        obj[key] = this.get(key);
      });
    return obj;
  }

  initialize(obj: any): void {
    Object.keys(obj)
      .forEach(key => {
        this.set(key, obj[key]);
      });
  }

  inject(): void {
  }
}
