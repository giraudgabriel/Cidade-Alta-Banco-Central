namespace BancoCentral.Domain.Entities.Interfaces
{
    public interface IEntityUser : IEntity
    {
        int UserId { get; set; }
    }
}