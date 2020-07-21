using System;
using BancoCentral.Domain.Entities;
using BancoCentral.Infra.ORM.Mapping.Transaction;
using BancoCentral.Infra.ORM.Mapping.User;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace BancoCentral.Infra.ORM.Contexts
{
    public class BancoCentralDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var databaseConfiguration = new DatabaseConfiguration
            {
                Server = "localhost",
                Database = "cidadealta",
                User = "root",
                Password = "1234"
            };

            optionsBuilder.UseMySql(databaseConfiguration.ToString(), mySqlOptions => mySqlOptions
                .ServerVersion(new Version(5, 7, 31), ServerType.MySql)
            );
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserMap());
            modelBuilder.ApplyConfiguration(new TransactionMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}