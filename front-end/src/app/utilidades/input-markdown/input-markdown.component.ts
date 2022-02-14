import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Input() contenidoMarkdown = '';

  //Parametro para el componete
  @Input() placeHolderTextArea: string = 'Texto';

  //Para enviar al componente padre el texto
  @Output() textEnriquecido: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // inputTextArea(texto: string) {
  //   // console.log(texto);
  //   this.contenidoMarkdown = texto;
  //   this.textEnriquecido.emit(texto);
  // }

}
