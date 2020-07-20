namespace BancoCentral.Domain.Entities
{
    public interface IEntityUser : IEntity
    {
        long Id { get; set; }
        long UserId { get; set; }
    }
}