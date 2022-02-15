using back_end.Entidades;
using System.Collections.Generic;

namespace back_end.Interfaces
{
    public interface IRepositorio
    {
        Genero ObtenerPorId(int Id);

        List<Genero> ObtenerTodosLosGeneros();
    }
}
