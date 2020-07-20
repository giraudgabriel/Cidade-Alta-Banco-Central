using System;
using System.Threading.Tasks;

namespace BancoCentral.Domain.Repositories
{
    public interface IRepositoryUnitOfWork : IDisposable
    {
        ITransactionRepository TransactionRepository { get; }
        IUserRepository UserRepository { get; }
        Task<int> SaveAsync();
    }
}