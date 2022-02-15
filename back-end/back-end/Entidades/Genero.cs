//Una entidad representa una tabla en nuestra base de datos
using System.ComponentModel.DataAnnotations;

namespace back_end.Entidades
{
    public class Genero
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="El campo {0} es requerido")]
        [StringLength(maximumLength:10,
        ErrorMessage = "El campo {0} no debe tener mas de 10 caracteres")]
        public string Nombre { get; set; }
    }
}
