using System;
using System.Collections.Generic;
using BancoCentral.Domain.Entities;

namespace BancoCentral.Domain.Repositories
{
    public interface ITransactionRepository : IRepository<Transaction>
    {
        IEnumerable<Transaction> GetExtractByDate(DateTime startDate, DateTime endDate);
    }
}