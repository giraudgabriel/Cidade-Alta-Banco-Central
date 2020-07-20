namespace BancoCentral.Domain.Entities
{
    public interface IEntityUser : IEntity
    {
        int UserId { get; set; }
    }
}