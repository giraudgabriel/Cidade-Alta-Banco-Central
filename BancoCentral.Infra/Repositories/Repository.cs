using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Repositories;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BancoCentral.Domain.Entities.Interfaces;
using BancoCentral.Domain.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BancoCentral.Infra.Repositories
{
    /// <summary>
    /// Classe de persistência e leitura de dados da base de dados.
    /// </summary>
    /// <typeparam name="T">Classe do tipo IEntity que representa uma entidade na base de dados.</typeparam>
    public abstract class Repository<T> : IRepository<T> where T : class, IEntity
    {
        private readonly DbContext _dbContext;

        protected Repository(DbContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public virtual void Update(T model) => _dbContext.Entry(model).State = EntityState.Modified;

        public virtual IQueryable<T> Find(Expression<Func<T, bool>> @predicate = null, int? page = null,
            int? qtdRecords = null)
        {
            var query = _dbContext.Set<T>().AsQueryable();

            if (predicate != null)
                query = query.Where(@predicate);

            ApplyPagination(ref query, page, qtdRecords);

            return query;
        }

        public virtual IQueryable<T> Find(Expression<Func<T, bool>> @predicate, int page, int qtdRecords,
            out long totalRecords)
        {
            try
            {
                totalRecords = _dbContext.Set<T>().LongCount(predicate);
                var query = _dbContext.Set<T>().Where(predicate);
                ApplyPagination(ref query, page, qtdRecords);
                return query;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw;
            }
        }

        public virtual IQueryable<T> Find<TKey>(Expression<Func<T, bool>> @predicate, int page, int qtdRecords,
            out long totalRecords, Expression<Func<T, TKey>> orderByExpression)
        {
            try
            {
                totalRecords = _dbContext.Set<T>().LongCount(predicate);
                var query = _dbContext.Set<T>().Where(predicate);
                ApplyPagination(ref query, page, qtdRecords, orderByExpression);
                return query;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw;
            }
        }

        public virtual async Task<T> FindByIdAsync(long id) => await _dbContext.Set<T>().FindAsync(id as object);

        public virtual T Delete(T model) => _dbContext.Set<T>().Remove(model).Entity;

        public virtual T Add(T model) => _dbContext.Set<T>().Add(model).Entity;

        public virtual async Task<long> TotalRecordsAsync(Expression<Func<T, bool>> @predicate = null)
            => predicate == null
                ? await _dbContext.Set<T>().LongCountAsync()
                : await _dbContext.Set<T>().LongCountAsync(predicate);

        protected static void ApplyPagination<TKey>(ref IQueryable<T> query, int? page, int? qtdRecords,
            Expression<Func<T, TKey>> orderByExpression)
        {
            if (page.HasValue && qtdRecords.HasValue)
                query = query.OrderBy(orderByExpression).Skip((page.Value - 1) * qtdRecords.Value)
                    .Take(qtdRecords.Value);
        }

        protected static void ApplyPagination(ref IQueryable<T> query, int? page, int? qtdRecords)
        {
            if (page.HasValue && qtdRecords.HasValue)
                query = query.OrderBy(x => x.Id).Skip((page.Value - 1) * qtdRecords.Value).Take(qtdRecords.Value);
        }

        public async Task<T> FindFirstAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbContext.Set<T>().FirstOrDefaultAsync(predicate);
        }

        public async Task<T> FindLastAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbContext.Set<T>()
                .Where(predicate)
                .OrderByDescending(x => x.Id)
                .FirstOrDefaultAsync(predicate);
        }
    }
}