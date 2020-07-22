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
    [Route("api/transaction")]
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
        public ActionResult<Set<Transaction>> Extract(DateTime startDate, DateTime endDate, int page, int qtdRecords)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            return _transactionAppService.Extract(startDate, endDate, page, qtdRecords);
        }

        [HttpPost("transfer")]
        public async Task<ActionResult<Transaction>> Transfer(
            [FromBody] TransferViewModel transferViewModel)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            var transfer = await _transactionAppService.Transfer(transferViewModel.Amount, transferViewModel.Passport);
            return transfer;
        }

        [HttpPost("deposit")]
        public async Task<ActionResult<Transaction>> Deposit([FromBody] decimal amount)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            var deposit = await _transactionAppService.Deposit(amount);
            return deposit;
        }

        [HttpPost("withdraw")]
        public async Task<ActionResult<Transaction>> Withdraw([FromBody] decimal amount)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            var withdraw = await _transactionAppService.Withdraw(amount);
            return withdraw;
        }
    }
}