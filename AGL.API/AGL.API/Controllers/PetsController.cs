using AGL.Application;
using AGL.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace AGL.API.Controllers
{
    [Route("api/[controller]")]
    public class PetsController : Controller
    {
        private readonly IPetsManager _petsManager;

        public PetsController(IPetsManager petsManager)
        {
            _petsManager = petsManager ?? throw new ArgumentNullException(nameof(petsManager));
        }

        // GET api/values
        [HttpGet]
        public async Task<PetsByPersonGenderCollection> GetPetsByPersonGender(PetType petType)
        {
            return await _petsManager.GetPetsByPersonGender(petType);
        }        
    }
}
