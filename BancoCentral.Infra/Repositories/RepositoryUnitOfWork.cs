using BancoCentral.Domain.Repositories;
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BancoCentral.Infra.Repositories
{
    public class RepositoryUnitOfWork : IRepositoryUnitOfWork
    {
        private readonly DbContext _dbContext;
        private bool _disposed;
        private readonly long? _userId;

        private ITransactionRepository _transactionRepository;

        public RepositoryUnitOfWork(DbContext dbContext, long? userId)
        {
            this._dbContext = dbContext;
            this._userId = userId;
        }

        public ITransactionRepository TransactionRepository =>
            _transactionRepository ??= new TransactionRepository(_dbContext);

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