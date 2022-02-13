import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  formPelicula: FormGroup;
  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Accion' },
    { id: 3, nombre: 'Comedia' }
  ];

  peliculasAEnviar = [
    { titulo: 'Spider-Man: Far From Home', enCines: false, proximosEstrenos: true, generos: [1, 2], poster: 'https://as01.epimg.net/us/imagenes/2019/06/20/tikitakas/1561057925_744437_1561060071_noticia_normal_recorte1.jpg' },
    { titulo: 'Moana: Far From Home', enCines: true, proximosEstrenos: false, generos: [3], poster: 'https://ep01.epimg.net/verne/imagenes/2015/10/08/articulo/1444317349_787548_1444414255_noticia_normal.jpg' },
    { titulo: 'Inception', enCines: false, proximosEstrenos: false, generos: [1, 3], poster: 'https://2.bp.blogspot.com/_dAGq_7k2IB8/THlCDA3uAWI/AAAAAAAACLg/ShbduPuEw-s/s1600/inception_ver13_xlg.jpg' }
  ];
  //Para guardar una copia
  peliculasOriginal = this.peliculasAEnviar;
  //Nuestro formulario de inicio
  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Campos del formulario
    this.formPelicula = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.formPelicula.value);

    //Esto devuelve un observable
    //Cada vez que haya un cambio en el formulario saltara un evento
    this.formPelicula.valueChanges
      .subscribe(valores => {
        console.log(valores);
        //Hay que limpiar cada vez que se haga una busqueda
        this.peliculasAEnviar = this.peliculasOriginal;
        //Llamamos al metodo con los cambios que se vayan produciendo
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaEnURL();
      })
  }

  //Metodo que se llama mediante el boton limpiar
  limpiar() {
    //Limpiaremos nuestro formulario.Le pasamos el formulario original a nuestro formulario
    this.formPelicula.patchValue(this.formularioOriginal);
  }

  buscarPeliculas(valores: any) {
    if (valores.titulo) {
      //Si la pelicula es distinta de menos es que hemos encontrado la pelicula
      //Si lo que el usuario ha escrito se encuentra dentro del titulo
      this.peliculasAEnviar = this.peliculasAEnviar
        .filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1)
    }
    if (valores.generoId !== 0) {
      this.peliculasAEnviar = this.peliculasAEnviar
        .filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1)
    }
    if (valores.proximosEstrenos) {
      this.peliculasAEnviar = this.peliculasAEnviar
        .filter(pelicula => pelicula.proximosEstrenos)
    }
    if (valores.enCines) {
      this.peliculasAEnviar = this.peliculasAEnviar
        .filter(pelicula => pelicula.enCines)
    }
  }

  private escribirParametrosBusquedaEnURL() {
    var queryStrings = [];

    var valoresFormulario = this.formPelicula.value;

    //Si tenemos titulo
    if (valoresFormulario.titulo) {
      //añadimos al array de querystring el valor del titulo
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }
    //Si tenemos genero
    if (valoresFormulario.generoId != '0') {
      //añadimos al array de querystring el valor del titulo
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }
    //Si tenemos titulo
    if (valoresFormulario.proximosEstrenos) {
      //añadimos al array de querystring el valor del titulo
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }
    //Si tenemos titulo
    if (valoresFormulario.enCines) {
      //añadimos al array de querystring el valor del titulo
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
      //rescribimos la URL
      this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
    }
  }

  private leerValoresURL() {
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto:any = {};

      if (params.titulo) {
        objeto.titulo = params.titulo;
      }

      if (params.generoId) {
        objeto.generoId = Number(params.generoId);
      }

      if (params.proximosEstrenos) {
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if (params.enCines) {
        objeto.enCines = params.enCines;
      }

      this.formPelicula.patchValue(objeto);
    });
  }

}
