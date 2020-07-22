using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Repositories;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BancoCentral.Domain.Services
{
    public abstract class DomainService<T> where T : class, IEntity
    {
        private readonly IRepository<T> _repository;

        protected DomainService(IRepository<T> repository)
        {
            this._repository = repository;
        }

        public virtual void Update(T model) => _repository.Update(model);

        public virtual IQueryable<T> Find(Expression<Func<T, bool>> @predicate, int page, int qtdRecords,
            out long totalRecords) => _repository.Find(@predicate, page, qtdRecords, out totalRecords);

        public virtual async Task<T> FindByIdAsync(long id) => await _repository.FindByIdAsync(id);

        public virtual async Task<T> FindFirstAsync(Expression<Func<T, bool>> predicate) =>
            await _repository.FindFirstAsync(@predicate);

        public virtual async Task<T> FindLastAsync(Expression<Func<T, bool>> @predicate) =>
            await _repository.FindLastAsync(@predicate);

        public virtual T Delete(T model) => _repository.Delete(model);

        public virtual T Add(T model) => _repository.Add(model);

        public virtual async Task<long> TotalRecordsAsync(Expression<Func<T, bool>> @predicate = null) =>
            await _repository.TotalRecordsAsync(predicate);
    }
}