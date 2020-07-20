using BancoCentral.Domain.Repositories;
using BancoCentral.Domain.Services;
using BancoCentral.Infra.Repositories;

namespace BancoCentral.Application.AppServices.Transaction
{
    public class TransactionAppService : AppService<Domain.Entities.Transaction>
    {
        private readonly TransactionService _transactionService;

        public TransactionAppService(long userId) : base(userId)
        {
            _transactionService = new TransactionService(UnitOfWork.TransactionRepository);
        }
    }
}