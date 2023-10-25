import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '@fem-production-angular/api-interfaces';

const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  model = 'items';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Item[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Item>(this.getUrlWithId(id));
  }

  create(item: Item) {
    return this.http.post<Item>(this.getUrl(), item);
  }

  update(item: Item) {
    return this.http.put<Item>(this.getUrlWithId(item.id), item);
  }

  delete(item: Item) {
    return this.http.delete<Item>(this.getUrlWithId(item.id));
  }

  private getUrl() {
    return `${API_ENDPOINT}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
