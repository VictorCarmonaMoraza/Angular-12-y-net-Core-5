## 53 - Filtro de peliculas-Lógica

Este es un select hardcodeado con datos

 <mat-form-field appearance="fill">
    <mat-label>Género</mat-label>
    <mat-select formControlName="generoId">
      <!--Por defecto podemos hardcodear aqui-->
        <mat-option [value]="'1'">Drama</mat-option>
        <mat-option [value]="'2'">Comedia</mat-option>
    </mat-select>
  </mat-form-field>
</form>

Se han creado los campos de titulo, genero y dos checkbox para proximos estrenos y peliculas que estan en cines.

El método indexOf()devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.

Para limpiar nuestro formulario hemos hecho

  1-Creamos una variable para guardar nuestro formulario
  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  2-Inicializamos con el formulario original
  ngOnInit(): void {
    //Campos del formulario
    this.formPelicula = this.formBuilder.group(this.formularioOriginal);

  
  3-Creamos el boton limpiar para que lance la funcion limpiar
  <div class="contenedor-limpiar">
    <button mat-flat-button (click)="limpiar()" color="warn">Limpiar</button>
  </div>

  4-Creamos el metodo de la funcion limpiar
  //Metodo que se llama mediante el boton limpiar
  limpiar() {
    //Limpiaremos nuestro formulario.Le pasamos el formulario original a nuestro formulario
    this.formPelicula.patchValue(this.formularioOriginal);
  }