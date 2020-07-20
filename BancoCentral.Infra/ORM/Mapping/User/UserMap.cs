using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BancoCentral.Infra.ORM.Mapping.User
{
    public class UserMap : IEntityTypeConfiguration<Domain.Entities.User>
    {
        public void Configure(EntityTypeBuilder<Domain.Entities.User> builder)
        {
            builder.ToTable("user");
            builder.HasKey(u => u.Id);
            builder.Property(u => u.Id).HasColumnName("userId").IsRequired();
            builder.Property(u => u.AmountBank).HasColumnName("amountBank").IsRequired();
            builder.Property(u => u.AmountWallet).HasColumnName("amountWallet").IsRequired();
            builder.Property(u => u.Name).HasColumnName("name").HasMaxLength(150).IsRequired();
        }
    }
}