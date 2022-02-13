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
