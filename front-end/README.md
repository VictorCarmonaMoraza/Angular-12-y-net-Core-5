## 54 - Filtro de peliculas - Query Strings

Ahora manipularemos la url para ir agregando los filtros que el usuario manipule.
Para trabajar con las URL tenemos que llamr a un servicio que se llama Location.
Normalmente este servicio le falla la importacion por lo cual se la debemos añadir que es:

  import { Location } from '@angular/common';
  
  
