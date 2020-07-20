namespace BancoCentral.Infra
{
    public class DatabaseConfiguration
    {
        public string Server { get; set; }
        public string Database { get; set; }
        public string User { get; set; }
        public string Password { get; set; }

        public override string ToString()
        {
            return $"server={Server};database={Database};user={User};password={Password}";
        }
    }
}