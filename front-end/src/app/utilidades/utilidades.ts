//rejected significa que la operacion fallo

export function toBase64(file: File) {
  //retorna una promesa porque la elctura del archivo no es instantanea
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  })
}


export function parsearErroresAPI(response: any): string[] {

  const resultado: string[] = [];

  if (response.error) {
    //Si el error es un string
    if (typeof response.error === 'string') {
      resultado.push(response.error);
    } else {
      //Tenemos un campo de mapas y errores
      //Aqui estan los errores(response.error.errors;)
      const mapaErrores = response.error.errors;
      //TRansformamos nuestro objeto en un arreglo
      const entradas = Object.entries(mapaErrores);
      //Recorremos nuestro arreglo
      entradas.forEach((arreglo: any[]) => {
        //Campo que ha dado errors
        debugger;
        const campo = arreglo[0];
        arreglo[1].forEach(mensajeError => {
          resultado.push(`${campo}: ${mensajeError}`);
        });
      })
    };
  }
  return resultado;
}