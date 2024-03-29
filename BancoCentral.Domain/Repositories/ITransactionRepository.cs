﻿using System;
using System.Collections.Generic;
using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Repositories.Interfaces;

namespace BancoCentral.Domain.Repositories
{
    public interface ITransactionRepository : IRepository<Transaction>
    {
        IEnumerable<Transaction> GetExtractByDate(DateTime startDate, DateTime endDate, int userId, int page,
            int qtdRecords, out int totalRecords);
    }
}