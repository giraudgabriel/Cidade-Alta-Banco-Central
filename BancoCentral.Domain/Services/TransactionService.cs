﻿using System;
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

        public EntityEntry<Transaction> Deposit(decimal amount, long userId)
        {
            if (amount <= 0) throw new Exception("O valor deve ser maior que zero!");
            var deposit = new Transaction
            {
                UserId = userId,
                Amount = amount,
                Type = TypeTransaction.Deposit
            };
            return _repository.Add(deposit);
        }

        public EntityEntry<Transaction> Transfer(decimal amount, long userId, long userIdDestiny)
        {
            if (amount <= 0) throw new Exception("O valor deve ser maior que zero!");
            var transfer = new Transaction
            {
                UserId = userId,
                Amount = amount,
                UserIdDestiny = userIdDestiny,
                Type = TypeTransaction.Transfer
            };
            return _repository.Add(transfer);
        }

        public EntityEntry<Transaction> Withdraw(decimal amount, long userId)
        {
            if (amount <= 0) throw new Exception("O valor deve ser maior que zero!");
            var withdraw = new Transaction
            {
                UserId = userId,
                Amount = amount,
                Type = TypeTransaction.Withdraw
            };
            return _repository.Add(withdraw);
        }
    }
}