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
            _userAppService = new UserAppService(HttpContext?.Session?.GetInt32("userId") ?? 1);
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<User>> Get()
        {
            var user = await _userAppService.GetLoggedUser();
            return user;
        }
    }
}