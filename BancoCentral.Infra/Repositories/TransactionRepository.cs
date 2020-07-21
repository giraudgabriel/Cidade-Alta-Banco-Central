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

        public IEnumerable<Transaction> GetExtractByDate(DateTime startDate, DateTime endDate, int userId)
        {
            var extract = _dbContext.Transactions.Where(t =>
                t.DateTime.Date >= startDate.Date && t.DateTime.Date <= endDate.Date && t.UserId == userId);
            return extract;
        }
    }
}