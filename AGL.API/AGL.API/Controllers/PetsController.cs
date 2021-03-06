﻿using AGL.Application;
using AGL.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace AGL.API.Controllers
{
    /// <summary>
    /// Pets controller
    /// </summary>
    [Route("api/[controller]")]
    public class PetsController : Controller
    {
        private readonly IPetsManager _petsManager;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="petsManager">The injected pets manager</param>
        public PetsController(IPetsManager petsManager)
        {
            _petsManager = petsManager ?? throw new ArgumentNullException(nameof(petsManager));
        }

        /// <summary>
        /// Get pets by person gender endpoint
        /// </summary>
        /// <param name="petType">The pet type</param>
        /// <returns><see cref="Task{PetsByPersonGenderCollection}"/></returns>
        [HttpGet("petsbypersongender")]
        public async Task<PetsByPersonGenderCollection> GetPetsByPersonGender(PetType petType)
        {
            return await _petsManager.GetPetsByPersonGender(petType);
        }        
    }
}
