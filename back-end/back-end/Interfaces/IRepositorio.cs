using back_end.Entidades;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace back_end.Interfaces
{
    public interface IRepositorio
    {
        Task<Genero> ObtenerPorId(int Id);

        List<Genero> ObtenerTodosLosGeneros();
    }
}
