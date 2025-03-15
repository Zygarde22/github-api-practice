"use strict";

async function getGitHubUser() {
    const url = `https://api.github.com/users/Zygarde22`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const user = await response.json();
        console.log("Username:", user.login);
        console.log("Public Repositories:", user.public_repos);
        console.log("Profile URL:", user.html_url);
    } catch (error) {
        console.error(error.message);
    }
}

async function listGitHubRepos() {
    const url = `https://api.github.com/users/Zygarde22/repos`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const repos = await response.json();
        console.log("First five repositories:");

        repos.slice(0, 5).forEach((repo, index) => {
            console.log(`${index + 1}. ${repo.name}`);
        });
    } catch (error) {
        console.error(error.message);
    }
}

// Call functions
getGitHubUser();
listGitHubRepos();
