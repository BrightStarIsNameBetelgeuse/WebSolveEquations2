using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebSolveEquations2.Startup))]
namespace WebSolveEquations2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
