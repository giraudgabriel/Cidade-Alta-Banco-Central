using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BancoCentral.Domain.Entities;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace BancoCentral.Domain.Repositories
{
    public interface IRepository<T> where T : class, IEntity
    {
        void Update(T model);
        IQueryable<T> Find(Expression<Func<T, bool>> @predicate, int page, int qtdRecords, out long totalRecords);

        IQueryable<T> Find<TKey>(Expression<Func<T, bool>> @predicate, int page, int qtdRecords, out long totalRecords,
            Expression<Func<T, TKey>> orderByExpression);

        Task<T> FindByIdAsync(long id);
        Task<T> FindFirstAsync(Expression<Func<T, bool>> @predicate);
        Task<T> FindLastAsync(Expression<Func<T, bool>> @predicate);
        EntityEntry<T> Delete(T model);
        EntityEntry<T> Add(T model);
        Task<long> TotalRecordsAsync(Expression<Func<T, bool>> @predicate = null);
    }
}