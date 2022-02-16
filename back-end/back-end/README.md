## 82 - Middleware

Una tuberia es una cadena de procesos conectados de tal forma que la salida de cada elemento de la cadena es la entrada del próximo.

A cada uno de los procesos le llamamos middleware. Se configuran en la clase Startup.cs

 public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger<Startup>logger)
        {
            //Guardamos todas las repuesta de log de los clientes
            app.Use(async (context, next) =>
            {
                using (var swapStream = new MemoryStream())
                {
                    var respuestaOriginal = context.Response.Body;
                    context.Response.Body = swapStream;

                    //Con esto decimos que queremos que continue la ejecucion del pipeline
                    await next.Invoke();

                    swapStream.Seek(0, SeekOrigin.Begin);
                    string respuesta = new StreamReader(swapStream).ReadToEnd();
                    swapStream.Seek(0, SeekOrigin.Begin);

                    await swapStream.CopyToAsync(respuestaOriginal);
                    context.Response.Body = respuestaOriginal;

                    logger.LogInformation(respuesta);

                }
            });

            //Esto solo se ejecuta si accedemos a una url especifica
            app.Map("/mapa1", (app) =>
            {
                app.Run(async context =>
                {
                    await context.Response.WriteAsync("Estoy interceptando el pipeline");
                });
            });




