using System.Collections.Generic;
using BancoCentral.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BancoCentral.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly ILogger<TransactionController> _logger;

        public TransactionController(ILogger<TransactionController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Transaction> Get()
        {
            return new List<Transaction>();
        }

        [HttpPut]
        public void Update()
        {
        }

        [HttpDelete]
        public void Delete()
        {
        }

        [HttpPost]
        public Transaction Add()
        {
            return new Transaction();
        }
    }
}