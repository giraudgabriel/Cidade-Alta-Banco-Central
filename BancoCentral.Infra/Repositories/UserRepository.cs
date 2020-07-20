using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace BancoCentral.Infra.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private readonly DbContext _dbContext;

        public UserRepository(DbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }
    }
}