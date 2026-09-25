import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
@Injectable({ providedIn: 'root' })
export class ProdutosService {
private apiUrl = 'https://localhost:7294/api/Produtos';
constructor(private http: HttpClient) {}
listarTodos(): Observable<Produto[]> {
return this.http.get<Produto[]>(this.apiUrl);
}
buscarPorId(id: number): Observable<Produto> {
return this.http.get<Produto>(`${this.apiUrl}/${id}`);
}
criar(produto: { nome: string; preco: number }):
Observable<Produto> {
return this.http.post<Produto>(this.apiUrl, produto);
}
atualizar(id: number, produto: { nome: string; preco: number }):
Observable<Produto> {
return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
}
remover(id: number): Observable<void> {
return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
listar(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
}
