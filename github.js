class Github {
  constructor() {
    // Following client id is generated when you register your GitHub application for OAuth
    this.client_id = 'f2e85bee559d1a4b1cad';
    this.client_secret = 'f5da7ec367eabf29a9243338f29ef4b1e257fb35';
    this.count = 5;
    this.repos_sort = 'created: asc';
  }

  // Get user
  async getUser(user) {
    // Get profile data of the user
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    // Get the repositories of the user
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    // return object
    return {
      // profile: profile,
      // repos: repos
      profile,
      repos,
    };
  }
}
