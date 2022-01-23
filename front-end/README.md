## 52 - Filtro de Películas - Plantilla

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
