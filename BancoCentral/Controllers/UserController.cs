using System.Threading.Tasks;
using BancoCentral.Application.AppServices.User;
using BancoCentral.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BancoCentral.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserControler : ControllerBase
    {
        private readonly UserAppService _userAppService;

        public UserControler()
        {
            _userAppService = new UserAppService(UserSession.UserId);
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<User>> Get()
        {
            if (UserSession.UserId == null) return new ActionResult<User>(Problem("É necessário estar logado!"));
            var user = await _userAppService.GetByPassport((int) (UserSession.UserId));
            return user;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<User>> Login([FromBody] int passport)
        {
            var user = await _userAppService.GetByPassport(passport);
            if (user == null) return new ActionResult<User>(Problem("Passaporte inválido!"));
            UserSession.UserId = user.Id;
            return user;
        }

        [HttpPost]
        [Route("logout")]
        public void Logout() => UserSession.UserId = null;
    }
}