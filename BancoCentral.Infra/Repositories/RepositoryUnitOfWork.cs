using BancoCentral.Domain.Repositories;
using System;
using System.Threading.Tasks;
using BancoCentral.Infra.ORM.Contexts;
using Microsoft.EntityFrameworkCore;

namespace BancoCentral.Infra.Repositories
{
    public class RepositoryUnitOfWork : IRepositoryUnitOfWork
    {
        private readonly BancoCentralDbContext _dbContext;
        private bool _disposed;
        private readonly long? _userId;

        private ITransactionRepository _transactionRepository;
        private IUserRepository _userRepository;

        public RepositoryUnitOfWork(BancoCentralDbContext dbContext, long? userId)
        {
            this._dbContext = dbContext;
            this._userId = userId;
        }

        public ITransactionRepository TransactionRepository =>
            _transactionRepository ??= new TransactionRepository(_dbContext);

        public IUserRepository UserRepository =>
            _userRepository ??= new UserRepository(_dbContext);

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public async Task<int> SaveAsync()
        {
            return await _dbContext.SaveChangesAsync();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed && disposing)
                _dbContext.Dispose();

            _disposed = true;
        }
    }
}