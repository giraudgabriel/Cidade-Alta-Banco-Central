using System;
using System.Collections;
using System.Collections.Generic;
using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Enums;
using BancoCentral.Domain.Repositories;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BancoCentral.Domain.Services
{
    public class TransactionService : DomainService<Transaction>
    {
        private readonly ITransactionRepository _repository;

        public TransactionService(ITransactionRepository repository) : base(repository)
        {
            _repository = repository;
        }

        public Transaction Deposit(decimal amount, int userId)
        {
            var deposit = new Transaction
            {
                UserId = userId,
                Amount = amount,
                Type = TypeTransaction.Deposit
            };
            return _repository.Add(deposit);
        }

        public Transaction Transfer(decimal amount, int userId, int userIdDestiny)
        {
            var transfer = new Transaction
            {
                UserId = userId,
                Amount = amount,
                UserIdDestiny = userIdDestiny,
                Type = TypeTransaction.Transfer
            };
            return _repository.Add(transfer);
        }

        public Transaction Withdraw(decimal amount, int userId)
        {
            var withdraw = new Transaction
            {
                UserId = userId,
                Amount = amount,
                Type = TypeTransaction.Withdraw
            };
            return _repository.Add(withdraw);
        }

        public IEnumerable<Transaction> Extract(DateTime startDate, DateTime endDate, int userId, int page,
            int qtdRecords, out int totalRecords)
        {
            return _repository.GetExtractByDate(startDate, endDate, userId, page, qtdRecords, out totalRecords);
        }
    }
}