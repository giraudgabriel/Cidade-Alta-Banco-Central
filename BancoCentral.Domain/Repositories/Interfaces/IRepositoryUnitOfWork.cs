using System;
using System.Threading.Tasks;

namespace BancoCentral.Domain.Repositories.Interfaces
{
    public interface IRepositoryUnitOfWork : IDisposable
    {
        ITransactionRepository TransactionRepository { get; }
        IUserRepository UserRepository { get; }
        Task<int> SaveAsync();
    }
}