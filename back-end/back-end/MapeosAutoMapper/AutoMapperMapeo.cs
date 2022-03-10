using AutoMapper;
using back_end.DTOs;
using back_end.Entidades;

namespace back_end.MapeosAutoMapper
{
    public class AutoMapperMapeo : Profile
    {
        //Constructor para los mapeos
        public AutoMapperMapeo()
        {
            //Mapeo de doble via con el ReverseMap
            CreateMap<Genero, GeneroDTO>().ReverseMap();
            CreateMap<GeneroCreacionDTO, Genero>();
        }
    }
}
