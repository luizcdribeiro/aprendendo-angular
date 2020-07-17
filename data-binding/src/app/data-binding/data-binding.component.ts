import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.scss']
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com';

  urlImagem: string = 'http://lorempixel.com/400/200/sports/';

  cursoAngular: boolean =  true

  valorAtual: string = '';
  valorSalvo: string;

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorFixo: number = 15;

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  botaoClicado() {
    alert('Botao clicado')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo =  valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
