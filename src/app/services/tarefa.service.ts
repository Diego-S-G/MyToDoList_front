import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITarefa } from '../interfaces/ITarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  url: string = 'https://localhost:7209/api/Tarefa';

  constructor(private http: HttpClient) { }

  getNaoFinalizados(): Observable<ITarefa> {
    return this.http.get<ITarefa>(`${this.url}/NaoFinalizados`);
  }

  getFinalizados(): Observable<ITarefa> {
    return this.http.get<ITarefa>(`${this.url}/Finalizados`);
  }

  post(entity: any) {
    return this.http.post(this.url, entity);
  }

  put(entity: ITarefa) {
    return this.http.put(this.url, entity);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.url);
  }

}
