"use strict";

async function getGitHubUser() {
    const url = `https://api.github.com/users/Zygarde22`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const user = await response.json();
        
        // Update HTML elements with user data
        document.getElementById("username").textContent = user.login;
        document.getElementById("repoCount").textContent = user.public_repos;
        document.getElementById("profileUrl").href = user.html_url;
        document.getElementById("profileUrl").textContent = user.html_url;
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
        
        // Clear the previous list of repositories
        const reposList = document.getElementById("repos");
        reposList.innerHTML = "";

        console.log("First five repositories:");

        // Show first five repositories in the list
        repos.slice(0, 5).forEach((repo, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${repo.name}`;
            reposList.appendChild(listItem);
        });
    } catch (error) {
        console.error(error.message);
    }
}
