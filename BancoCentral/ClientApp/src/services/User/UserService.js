class UserService {
    async fetchUser() {
        return await fetch(`api/user`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    }
    async signIn(passport) {
        try {
            return await fetch('api/user/login', {
                method: 'POST',
                body: passport,
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

    async signOut() {
        try {
            return await fetch('api/user/logout', {
                method: 'POST',
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

export default new UserService();