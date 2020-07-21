using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BancoCentral.Application.AppServices.Transaction;
using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Objects;
using BancoCentral.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.Extensions.Logging;

namespace BancoCentral.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly ILogger<TransactionController> _logger;
        private readonly TransactionAppService _transactionAppService;

        public TransactionController(ILogger<TransactionController> logger)
        {
            _transactionAppService = new TransactionAppService(HttpContext?.Session?.GetInt32("userId") ?? 1);
            _logger = logger;
        }

        [HttpGet("extract/{startDate:DateTime}/{endDate:DateTime}/{page:int}/{qtdRecords:int}")]
        public Set<Transaction> Extract(DateTime startDate, DateTime endDate, int page, int qtdRecords)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            return _transactionAppService.Extract(startDate, endDate, page, qtdRecords);
        }

        [HttpPost]
        public Task<EntityEntry<Transaction>> Transfer([FromBody]TransferViewModel transferViewModel)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            return _transactionAppService.Transfer(transferViewModel.Amount, transferViewModel.Passport);
        }

        [HttpPost("deposit")]
        public Task<EntityEntry<Transaction>> Deposit([FromBody]decimal amount)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            return _transactionAppService.Deposit(amount);
        }

        [HttpPost]
        public Task<EntityEntry<Transaction>> Withdraw([FromBody]DepositViewModel depositViewModel)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            return _transactionAppService.Withdraw(depositViewModel.Amount);
        }
    }
}