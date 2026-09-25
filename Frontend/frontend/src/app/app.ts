import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
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
  produtos: any[] = [];
  novoNome: string = '';
  novoPreco: number | null = null;
  
  idBusca: number | null = null;
  produtoBusca: any = null;

  editandoId: number | null = null;
  editNome: string = '';
  editPreco: number | null = null;

  constructor(
    private produtosService: ProdutosService,
    private cdr: ChangeDetectorRef // Injeção essencial para atualizar o ecrã no 1º clique
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.listar().subscribe(dados => {
      this.produtos = dados;
      this.cdr.detectChanges(); // Força atualização imediata
    });
  }

  criarProduto(): void {
    if (this.novoNome && this.novoPreco !== null) {
      this.produtosService.criar({ nome: this.novoNome, preco: this.novoPreco }).subscribe(() => {
        this.novoNome = '';
        this.novoPreco = null;
        this.carregarProdutos();
        this.cdr.detectChanges(); // Garante que o botão Adicionar reflete logo na tabela
      });
    }
  }

  buscarPorId(): void {
    if (this.idBusca) {
      this.produtosService.buscarPorId(this.idBusca).subscribe(res => {
        this.produtoBusca = res;
        this.cdr.detectChanges();
      });
    }
  }

  iniciarEdicao(p: any): void {
    this.editandoId = p.id;
    this.editNome = p.nome;
    this.editPreco = p.preco;
    this.cdr.detectChanges();
  }

  cancelarEdicao(): void {
    this.editandoId = null;
    this.editNome = '';
    this.editPreco = null;
    this.cdr.detectChanges();
  }

  salvarEdicao(id: number): void {
    if (this.editPreco !== null) {
      this.produtosService.atualizar(id, { nome: this.editNome, preco: this.editPreco }).subscribe(() => {
        this.editandoId = null;
        this.editNome = '';
        this.editPreco = null;
        this.carregarProdutos();
        this.cdr.detectChanges(); // Fecha a caixinha e atualiza no 1º clique
      });
    }
  }

  remover(id: number): void {
    this.produtosService.remover(id).subscribe(() => {
      this.carregarProdutos();
      this.cdr.detectChanges(); // Remove da tabela no 1º clique
    });
  }
}