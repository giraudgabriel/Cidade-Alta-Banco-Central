using System;
using BancoCentral.Domain.Entities;
using BancoCentral.Domain.Repositories;
using BancoCentral.Domain.Services.Interfaces;

namespace BancoCentral.Domain.Services
{
    public class UserService : DomainService<User>
    {
        private readonly IUserRepository _repository;

        public UserService(IUserRepository repository) : base(repository)
        {
            _repository = repository;
        }

        public override void Update(User model)
        {
            model.UpdatedAt = DateTime.Now;
            base.Update(model);
        }
    }
}