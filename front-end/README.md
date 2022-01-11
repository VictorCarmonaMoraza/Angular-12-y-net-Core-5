## 34 - Output - Comunicación de Componente Hijo a Padre
Compoennte Padre--->app.component.ts

Componente Hijo---->el hijo es rating.component.ts

-Hijo rating.component.ts

  1-Declaramos el Output
       @Output() emitirHaciaElPadre: EventEmitter<number> = new EventEmitter<number>();

  2-Emitimos desde cualquier metodo al padre
        this.emitirHaciaElPadre.emit(this.estrellaSeleccionada);

-Padre app.component.html. Enviamos informacion al metodo del padre recibirDelHijo
        <app-rating (emitirHaciaElPadre)="recibirDelHijo($event)"></app-rating>

-Padre app.component.ts .Recibimso informacion y la mostramos o tratamos de la forma que nosotros queramos
        recibirDelHijo(voto: number):void {
          alert(voto);
        }


