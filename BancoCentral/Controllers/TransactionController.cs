using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using BancoCentral.Application.AppServices.Transaction;
using BancoCentral.Domain.Entities;
using BancoCentral.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.Extensions.Logging;

namespace BancoCentral.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly ILogger<TransactionController> _logger;
        private readonly TransactionAppService _transactionAppService;

        public TransactionController(ILogger<TransactionController> logger)
        {
            _transactionAppService = new TransactionAppService(HttpContext.Session.GetInt32("userId") ?? 1);
            _logger = logger;
        }

        [HttpGet]
        [Route("/extract")]
        public IEnumerable<Transaction> Extract(ExtractViewModel extractViewModel)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            return _transactionAppService.Extract(extractViewModel.StartDate, extractViewModel.EndDate);
        }

        [HttpPost]
        [Route("/transfer")]
        public Task<EntityEntry<Transaction>> Transfer(TransferViewModel transferViewModel)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            return _transactionAppService.Transfer(transferViewModel.Amount, transferViewModel.Passport);
        }

        [HttpPost]
        [Route("/deposit")]
        public Task<EntityEntry<Transaction>> Deposit(DepositViewModel depositViewModel)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            return _transactionAppService.Deposit(depositViewModel.Amount);
        }

        [HttpPost]
        [Route("/withdraw")]
        public Task<EntityEntry<Transaction>> Withdraw(DepositViewModel depositViewModel)
        {
            if (!ModelState.IsValid) throw new Exception(ModelState.ToString());
            return _transactionAppService.Withdraw(depositViewModel.Amount);
        }
    }
}