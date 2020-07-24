using System;

namespace BancoCentral.Application.AppServices.Transaction
{
    public static class ValidationTransaction
    {
        public static void ValidateAmount(decimal amount)
        {
            if (amount <= 0) throw new Exception("O valor deve ser maior que zero!");
        }

        public static void ValidateUserTransfer(int userId, int userIdDestiny)
        {
            if (userId == userIdDestiny) throw new Exception("O passaporte deve ser diferente do seu!");
        }

        public static void ValidateAmountWallet(decimal amount, Domain.Entities.User user)
        {
            if (user?.AmountWallet < amount) throw new Exception("Saldo insuficiente na carteira!");
        }

        public static void ValidateAmountBank(decimal amount, Domain.Entities.User user)
        {
            if (user?.AmountBank < amount) throw new Exception("Saldo insuficiente no banco!");
        }

        public static void ValidatePassport(Domain.Entities.User userDestiny)
        {
            if (userDestiny == null) throw new Exception("Passaporte inválido!");
        }
    }
}