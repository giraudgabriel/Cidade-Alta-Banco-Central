using System;
using Microsoft.AspNetCore.Http;

namespace BancoCentral.Controllers
{
    public static class UserSession
    {
        private static IHttpContextAccessor _accessor;

        public static void Configure(IHttpContextAccessor httpContextAccessor)
        {
            _accessor = httpContextAccessor;
        }

        public static HttpContext HttpContext => _accessor.HttpContext;

        public static int? UserId
        {
            get => HttpContext.Session.GetInt32("UserId") ?? null;
            set
            {
                if (value != null) HttpContext.Session.SetInt32("UserId", (int) value);
            }
        }

        public static bool CheckSession() => UserId != null;
    }
}