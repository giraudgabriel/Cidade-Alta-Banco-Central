using System;
using System.Collections.Generic;
using System.Linq;
using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Repositories;
using BancoCentral.Infra.ORM.Contexts;
using Microsoft.EntityFrameworkCore;

namespace BancoCentral.Infra.Repositories
{
    public class TransactionRepository : Repository<Transaction>, ITransactionRepository
    {
        private readonly BancoCentralDbContext _dbContext;

        public TransactionRepository(BancoCentralDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Transaction> GetExtractByDate(DateTime startDate, DateTime endDate, int userId, int page,
            int qtdRecords, out int totalRecords)
        {
            var extract = _dbContext.Transactions
                .Include(t => t.UserDestiny)
                .Include(t => t.User)
                .Where(t => t.DateTime.Date >= startDate.Date
                            && t.DateTime.Date <= endDate.Date
                            && (t.UserId == userId || t.UserIdDestiny == userId));

            totalRecords = _dbContext.Transactions
                .Count(t => t.DateTime.Date >= startDate.Date
                            && t.DateTime.Date <= endDate.Date
                            && (t.UserId == userId || t.UserIdDestiny == userId));

            ApplyPagination(ref extract, page, qtdRecords, t => t.DateTime);

            return extract;
        }
    }
}