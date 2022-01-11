import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'El valor que yo quiera';
  peliculasEnCines;
  peliculasProximosEstrenos;

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster:'https://uh.gsstatic.es/noticias/sociedad/2016/08/15/316976/spider-man-cumple-anos.jpg'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster:'https://img.discogs.com/CsmEff6vnrSHFr_fVd8IjxHswgo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15761965-1597320120-4681.jpeg.jpg'
      }]
    }, 1000);

    setTimeout(() => {
      this.peliculasProximosEstrenos = []
    }, 500)
  }
  recibirDelHijo(voto: number):void {
    alert(voto);
  }

}
