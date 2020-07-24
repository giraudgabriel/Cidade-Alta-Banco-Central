using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using BancoCentral.Domain.Objects;
using BancoCentral.Domain.Services;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BancoCentral.Application.AppServices.Transaction
{
    public class TransactionAppService : AppService<Domain.Entities.Transaction>
    {
        private readonly TransactionService _transactionService;
        private readonly UserService _userService;
        private readonly int _userId;

        public TransactionAppService(int userId) : base(userId)
        {
            _transactionService = new TransactionService(UnitOfWork.TransactionRepository);
            _userService = new UserService(UnitOfWork.UserRepository);
            _userId = userId;
        }

        public async Task<Domain.Entities.Transaction> Transfer(decimal amount, int userIdDestiny)
        {
            ValidationTransaction.ValidateAmount(amount);
            ValidationTransaction.ValidateUserTransfer(_userId, userIdDestiny);
            var userDestiny = await _userService.FindFirstAsync(u => u.Id == userIdDestiny);
            ValidationTransaction.ValidatePassport(userDestiny);
            var user = await _userService.FindFirstAsync(u => u.Id == _userId);
            ValidationTransaction.ValidateAmountBank(amount, user);

            var transfer = _transactionService.Transfer(amount, _userId, userIdDestiny);

            user.AmountBank -= amount;
            userDestiny.AmountBank += amount;

            _userService.Update(user);
            _userService.Update(userDestiny);

            await SaveAsync();
            return transfer;
        }

        public async Task<Domain.Entities.Transaction> Withdraw(decimal amount)
        {
            ValidationTransaction.ValidateAmount(amount);
            var user = await _userService.FindFirstAsync(u => u.Id == _userId);
            ValidationTransaction.ValidateAmountBank(amount, user);

            var withdraw = _transactionService.Withdraw(amount, _userId);

            user.AmountBank -= amount;
            user.AmountWallet += amount;

            _userService.Update(user);

            await SaveAsync();
            return withdraw;
        }

        public async Task<Domain.Entities.Transaction> Deposit(decimal amount)
        {
            ValidationTransaction.ValidateAmount(amount);
            var user = await _userService.FindFirstAsync(u => u.Id == _userId);
            ValidationTransaction.ValidateAmountWallet(amount, user);

            var deposit = _transactionService.Deposit(amount, _userId);

            user.AmountBank += amount;
            user.AmountWallet -= amount;

            _userService.Update(user);

            await SaveAsync();
            return deposit;
        }

        public Set<Domain.Entities.Transaction> Extract(DateTime startDate, DateTime endDate, int page, int qtdRecords)
        {
            var records =
                _transactionService.Extract(startDate, endDate, _userId, page, qtdRecords, out var totalRecords);
            return new Set<Domain.Entities.Transaction>(totalRecords, records);
        }
    }
}