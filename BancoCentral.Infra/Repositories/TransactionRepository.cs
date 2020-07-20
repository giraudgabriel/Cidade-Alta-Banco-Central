using System;
using System.Collections.Generic;
using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace BancoCentral.Infra.Repositories
{
    public class TransactionRepository : Repository<Transaction>, ITransactionRepository
    {
        public TransactionRepository(DbContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<Transaction> GetExtractByDate(DateTime startDate, DateTime endDate)
        {
            var extract = Find(t => t.DateTime >= startDate && t.DateTime <= endDate);
            return extract;
        }
    }
}