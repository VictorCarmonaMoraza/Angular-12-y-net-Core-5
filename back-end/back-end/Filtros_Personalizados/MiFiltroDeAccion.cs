﻿using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Filtros_Personalizados
{
    public class MiFiltroDeAccion : IActionFilter
    {
        private readonly ILogger<MiFiltroDeAccion> logger;

        public MiFiltroDeAccion(ILogger<MiFiltroDeAccion> logger)
        {
            this.logger = logger;
        }


        //Antes de ejecutar la accion
        public void OnActionExecuting(ActionExecutingContext context)
        {
            logger.LogInformation("Antes de ejecutar la accion");
        }

        //Despues de ejecutar la accion
        public void OnActionExecuted(ActionExecutedContext context)
        {
            logger.LogInformation("Despues de ejecutar la accion");
        }
    }
}
