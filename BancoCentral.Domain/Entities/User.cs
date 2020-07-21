using System;
using System.Collections.Generic;

namespace BancoCentral.Domain.Entities
{
    public class User : IEntity
    {
        public int Id { get; set; }
        public decimal AmountBank { get; set; } = new decimal(0.0);
        public decimal AmountWallet { get; set; } = new decimal(0.0);
        public string Name { get; set; } = string.Empty;
        public bool Whitelist { get; set; } = false;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public virtual IEnumerable<Transaction> Transactions { get; } = new HashSet<Transaction>();
    }
}