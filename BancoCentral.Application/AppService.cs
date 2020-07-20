using BancoCentral.Domain.Entities;
using BancoCentral.Infra.Repositories;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using BancoCentral.Infra.ORM.Contexts;

namespace BancoCentral.Application
{
    public abstract class AppService<T> : IDisposable where T : class, IEntity
    {
        protected readonly RepositoryUnitOfWork UnitOfWork;
        private readonly int? _userId;

        protected AppService(long? userId)
        {
            var dbContext = new BancoCentralDbContext();
            _userId = (int?) (userId ?? _userId);
            UnitOfWork = new RepositoryUnitOfWork(dbContext, _userId);
        }

        public void Dispose()
        {
            UnitOfWork.Dispose();
            GC.SuppressFinalize(this);
        }

        protected async Task<int> SaveAsync() => await UnitOfWork.SaveAsync();
    }
}