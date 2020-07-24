using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BancoCentral.Application.AppServices.Transaction;
using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Objects;
using BancoCentral.ViewModels;
using BancoCentral.ViewModels.Interfaces;
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
            if (!UserSession.CheckSession()) return;
            _transactionAppService = new TransactionAppService((int) UserSession.UserId);
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
            try
            {
                if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
                return await _transactionAppService.Transfer(transferViewModel.Amount, transferViewModel.Passport);
            }
            catch (Exception e)
            {
                return new ActionResult<Transaction>(Problem(e.Message));
            }
        }

        [HttpPost("deposit")]
        public async Task<ActionResult<Transaction>> Deposit([FromBody] decimal amount)
        {
            try
            {
                if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
                return await _transactionAppService.Deposit(amount);
            }
            catch (Exception e)
            {
                return new ActionResult<Transaction>(Problem(e.Message));
            }
        }

        [HttpPost("withdraw")]
        public async Task<ActionResult<Transaction>> Withdraw([FromBody] decimal amount)
        {
            try
            {
                if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
                return await _transactionAppService.Withdraw(amount);
            }
            catch (Exception e)
            {
                return new ActionResult<Transaction>(Problem(e.Message));
            }
        }
    }
}