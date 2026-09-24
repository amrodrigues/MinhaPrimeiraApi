import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from './services/produtos.spec';
import { Produto } from './models/produto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  produtos: Produto[] = [];
  produtoBusca: Produto | null = null;
  idBusca: number | null = null;

  novoNome: string = '';
  novoPreco: number | null = null;

  editandoId: number | null = null;
  editNome: string = '';
  editPreco: number | null = null;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.listarTodos().subscribe({
      next: (data) => (this.produtos = data),
      error: (err) => console.error('Erro ao listar produtos', err)
    });
  }

  buscarPorId(): void {
    if (this.idBusca) {
      this.produtosService.buscarPorId(this.idBusca).subscribe({
        next: (data) => (this.produtoBusca = data),
        error: (err) => {
          console.error('Produto não encontrado', err);
          this.produtoBusca = null;
        }
      });
    }
  }

  criarProduto(): void {
    if (this.novoNome && this.novoPreco !== null) {
      this.produtosService.criar({ nome: this.novoNome, preco: this.novoPreco }).subscribe({
        next: () => {
          this.novoNome = '';
          this.novoPreco = null;
          this.carregarProdutos();
        },
        error: (err) => console.error('Erro ao criar produto', err)
      });
    }
  }

  iniciarEdicao(produto: Produto): void {
    this.editandoId = produto.id;
    this.editNome = produto.nome;
    this.editPreco = produto.preco;
  }

  salvarEdicao(id: number): void {
    if (this.editPreco !== null) {
      this.produtosService.atualizar(id, { nome: this.editNome, preco: this.editPreco }).subscribe({
        next: () => {
          this.editandoId = null;
          this.carregarProdutos();
        },
        error: (err) => console.error('Erro ao atualizar produto', err)
      });
    }
  }

  cancelarEdicao(): void {
    this.editandoId = null;
  }

  remover(id: number): void {
    if (confirm('Tem certeza que deseja remover este produto?')) {
      this.produtosService.remover(id).subscribe({
        next: () => this.carregarProdutos(),
        error: (err) => console.error('Erro ao remover produto', err)
      });
    }
  }
}