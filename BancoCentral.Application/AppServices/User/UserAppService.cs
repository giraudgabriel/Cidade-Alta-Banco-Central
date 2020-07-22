using System.Threading.Tasks;
using BancoCentral.Domain.Services;

namespace BancoCentral.Application.AppServices.User
{
    public class UserAppService : AppService<Domain.Entities.User>
    {
        private readonly int _userId;
        private readonly UserService _userService;

        public UserAppService(int? userId) : base(userId)
        {
            _userId = userId ?? 1;
            _userService = new UserService(UnitOfWork.UserRepository);
        }

        public async Task<Domain.Entities.User> GetLoggedUser()
        {
            return await _userService.FindFirstAsync(u => u.Id == _userId);
        }
    }
}