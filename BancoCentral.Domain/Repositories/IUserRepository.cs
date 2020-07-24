using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Repositories.Interfaces;

namespace BancoCentral.Domain.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
    }
}