using BancoCentral.ViewModels.Interfaces;

namespace BancoCentral.ViewModels
{
    public class TransferViewModel : IAmount
    {
        public int Passport { get; set; }
        public decimal Amount { get; set; }
    }
}