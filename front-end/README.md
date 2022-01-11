## 33-ngClass - Aplicando Estilos de CSS Dinámicamente
1-Crearemos un componente nuevo dentro de la carpeta utiliades llamado rating sin el archivo de pruebas 
ng g c utilidades/rating --skip-tests=true
2-Añadiremos css dinamicamente:
  [ngClass]="{checked: estrellaSeleccionada > indice}"
3-Varios metodos para cuando pasemos el boton por encima de las estrellas y cuando las abandonemos
  (mouseenter)="manejarMouseEnter(indice)"
  (mouseleave)="manejarMouseLeave()"
4-Un metodo para marcar la estrella seleccionada
  (click)="marcarEstrellaSeleccionada(indice)"

