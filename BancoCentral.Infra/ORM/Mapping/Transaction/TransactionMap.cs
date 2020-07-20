using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BancoCentral.Infra.ORM.Mapping.Transaction
{
    public class TransactionMap : IEntityTypeConfiguration<Domain.Entities.Transaction>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.Transaction> builder)
        {
            builder.ToTable("transaction");
            builder.HasKey(t => t.Id);
            builder.HasOne(t => t.User).WithMany(u => u.Transactions);
            builder.HasOne(t => t.UserDestiny).WithMany(u => u.TransactionsReceived);
            builder.Property(t => t.Id).HasColumnName("transactionId").IsRequired();
            builder.Property(t => t.Amount).HasColumnName("amount").IsRequired();
            builder.Property(t => t.Type).HasColumnName("type").IsRequired();
            builder.Property(t => t.DateTime).HasColumnName("datetime").IsRequired();
            builder.Property(t => t.UserIdDestiny).HasColumnName("userIdDestiny");
            builder.Property(t => t.UserId).HasColumnName("userId");
        }
    }
}