class TransactionService {
    async Deposit(amount) {
        try {
            return await fetch('api/transaction/deposit', {
                method: 'POST',
                body: amount,
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
        } catch (e) {
            console.error(e);
            return e;
        }
    }

    async Withdraw(amount) {
        try {
            return await fetch('api/transaction/withdraw', {
                method: 'POST',
                body: amount,
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
        } catch (e) {
            console.error(e);
            return e;
        }
    }

    async Extract(startDate, endDate, page, qtdRecords) {
        return await fetch(`api/transaction/extract/${startDate}/${endDate}/${page}/${qtdRecords}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    }

    async Transfer(amount, passport) {
        try {
            return await fetch('api/transaction/transfer', {
                method: 'POST',
                body: JSON.stringify({amount, passport}),
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
        } catch (e) {
            console.error(e);
            return e;
        }
    }
}

export default new TransactionService();