import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  @Input() titulo: string;

  //El constructor de la clase no es un evento del ciclo de vida
  constructor() { }

  ngAfterViewInit(): void {
    console.log('on after view init');
  }
  ngDoCheck(): void {
    console.log('do check');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }

  ngOnInit(): void {
    console.log('on init');
  }

}
