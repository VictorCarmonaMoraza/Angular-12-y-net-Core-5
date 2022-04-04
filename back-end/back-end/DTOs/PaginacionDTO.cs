using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class PaginacionDTO
    {
        //Por defecto el valor va a ser 1
        public int Pagina { get; set; } = 1;

        //Limite de registros por paginas a mostrar por defecto
        private int recordPorPagina = 10;

        //Maximo por pagina seran 50 registros
        private readonly int cantidadMaximaRecordsPorPagia = 50;

        public int RecordsPorPagina
        {
            get
            {
                return recordPorPagina;
            }
            set
            {
                recordPorPagina = (value > cantidadMaximaRecordsPorPagia) ? cantidadMaximaRecordsPorPagia : value;
            }
        }


    }
}
