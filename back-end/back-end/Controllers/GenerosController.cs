using back_end.Entidades;
using back_end.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/generos")]
    [ApiController]
    public class GenerosController:Controller
    {
        private readonly IRepositorio repositorio;
        private readonly ILogger<GenerosController> logger;

        public GenerosController(IRepositorio repositorio, ILogger<GenerosController> logger)
        {
            this.repositorio = repositorio;
            this.logger = logger;
        }

        /// <summary>
        /// Obtenemos todo el listado de generos
        /// </summary>
        /// <returns>listado de generos</returns>
        [HttpGet("listado")]
        [HttpGet("/listadogeneros")]
        [HttpGet]
        public ActionResult<List<Genero>> Get()
        {
            logger.LogInformation("Vamos a mostrar los generos");
            return repositorio.ObtenerTodosLosGeneros();
        }

        /// <summary>
        /// Obtenemos un genero por Id
        /// </summary>
        /// <param name="Id">Id del genero</param>
        /// <returns></returns>
        /// [BindRequired] indicara que es obligatorio
        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id, [BindRequired] string nombre)
        {
            ////Si el modelo es valido
            //if (!ModelState.IsValid)
            //{
            //    //Le indicara al usuario que regla de validacion no ha cumplido
            //    return BadRequest(ModelState);
            //}
            logger.LogDebug($"Obteneniendo un genero por el id {Id}");
            var genero = await repositorio.ObtenerPorId(Id);

            //Comprobamos que no sea nulo
            if (genero == null)
            {
                logger.LogWarning($"No pudimos encontrar el genero de id {Id}");
                return NotFound();
            }

            return genero;
        }


        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
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

