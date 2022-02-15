using back_end.Entidades;
using back_end.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Repositorios
{
    public class RepositorioEnMemoria: IRepositorio
    {
        private List<Genero> _generos;

        //Constructor
        public RepositorioEnMemoria()
        {
            _generos = new List<Genero>()
            {
                new Genero(){Id=1,Nombre="Comedia"},
                new Genero(){Id=2,Nombre="Accion"}
            };
        }

        /// <summary>
        /// Obtenemos todos el listado de generos que tenemos harcodeado en memoria
        /// </summary>
        /// <returns>listado de generos</returns>
        public List<Genero> ObtenerTodosLosGeneros()
        {
            return _generos;
        }
    }
}
