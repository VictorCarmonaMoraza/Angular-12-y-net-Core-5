using back_end.Entidades;
using back_end.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace back_end.Controllers
{
    [Route("api/generos")]
    public class GenerosController:Controller
    {
        private readonly IRepositorio repositorio;

        public GenerosController(IRepositorio repositorio)
        {
            this.repositorio = repositorio;
        }

        /// <summary>
        /// Obtenemos todo el listado de generos
        /// </summary>
        /// <returns>listado de generos</returns>
        [HttpGet]
        public List<Genero> Get()
        {
            return repositorio.ObtenerTodosLosGeneros();
        }

        /// <summary>
        /// Obtenemos un genero por Id
        /// </summary>
        /// <param name="Id">Id del genero</param>
        /// <returns></returns>
        [HttpGet("{Id:int}/{nombre=Roberto}")]
        public Genero Get(int Id, string nombre)
        {
            var genero = repositorio.ObtenerPorId(Id);

            //Comprobamos que no sea nulo
            if (genero == null)
            {
                //return NotFound();
            }

            return genero;
        }


        [HttpPost]
        public void Post()
        {

        }

        [HttpPut]
        public void Put()
        {

        }

        [HttpDelete]
        public ContentResult Delete()
        {
            ContentResult resultado = new ContentResult
            {
                Content = "<h1>Te vamos a eliminar Victor</h1>",
                ContentType ="htnl"
            };
            return resultado;
        }

    }
}

