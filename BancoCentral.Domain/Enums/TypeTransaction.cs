using System.ComponentModel;

namespace BancoCentral.Domain.Enums
{
    public enum TypeTransaction
    {
        [Description("Depósito")] Deposit,
        [Description("Transferência")] Transfer,
        [Description("Saque")] Withdraw
    }
}