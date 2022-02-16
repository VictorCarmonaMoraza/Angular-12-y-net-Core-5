using back_end.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/generos")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class GenerosController:Controller
    {
        
        private readonly ILogger<GenerosController> logger;

        public GenerosController(ILogger<GenerosController> logger)
        {
            
            this.logger = logger;
        }

        /// <summary>
        /// Obtenemos todo el listado de generos
        /// </summary>
        /// <returns>listado de generos</returns>
        [HttpGet]
        public ActionResult<List<Genero>> Get()
        {
            return new List<Genero> { new Genero() { Id = 1, Nombre = "Comedia" } };
        }

        /// <summary>
        /// Obtenemos un genero por Id
        /// </summary>
        /// <param name="Id">Id del genero</param>
        /// <returns></returns>
        /// [BindRequired] indicara que es obligatorio
        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Genero>> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genero genero)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genero genero)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }

    }
}

