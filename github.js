class Github{
    constructor() {
        this.client_id = 'e5a6ee042662691f56e9';
        this.client_secret = 'dca2e1621d0ccb36cb9ff757345a09ab95a3619a';
        this.repos_conut = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_conut}$sort=${this.repos_sort}$client_id=${this.client_id}$client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile, repos
        }
    }
}