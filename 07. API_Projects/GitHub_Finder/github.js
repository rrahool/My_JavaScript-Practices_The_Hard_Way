class GitHub {
  constructor() {
    this.client_id = '661ab221deaab1f6b774';
    this.client_secret = '39dc54bf155001491dbd7ad4277b536215e2b823';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // 
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}t&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
      // profile: profile
      profile,
      // repos: repos
      repos
    }
  }
}