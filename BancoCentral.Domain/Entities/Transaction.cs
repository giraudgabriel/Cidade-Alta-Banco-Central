using System;
using BancoCentral.Domain.Enums;

namespace BancoCentral.Domain.Entities
{
    public class Transaction : IEntityUser
    {
        public int Id { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
        public decimal Amount { get; set; } = new decimal(0.0);
        public DateTime DateTime { get; set; } = DateTime.Now;
        public TypeTransaction Type { get; set; } = TypeTransaction.Deposit;
        public virtual User UserDestiny { get; set; } = null;
        public int? UserIdDestiny { get; set; } = null;
    }
}