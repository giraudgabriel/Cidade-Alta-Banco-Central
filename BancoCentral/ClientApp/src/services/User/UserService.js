class UserService {
    async fetchUser() {
        return await fetch(`api/user`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    }
}

export default new UserService();