using back_end.Entidades;
using back_end.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

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
        public ActionResult<List<Genero>> Get()
        {
            return repositorio.ObtenerTodosLosGeneros();
        }

        /// <summary>
        /// Obtenemos un genero por Id
        /// </summary>
        /// <param name="Id">Id del genero</param>
        /// <returns></returns>
        [HttpGet("{Id:int}/{nombre=Roberto}")]
        public async Task<ActionResult<Genero>> Get(int Id, string nombre)
        {
            var genero = await repositorio.ObtenerPorId(Id);

            //Comprobamos que no sea nulo
            if (genero == null)
            {
                return NotFound();
            }

            return genero;
        }


        [HttpPost]
        public ActionResult Post()
        {
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put()
        {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }

    }
}

