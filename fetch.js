"use strict";

async function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts"; // Correct URL
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log("First post title:", json[0].title); // Display the title of the first post
    } catch (error) {
        console.error(error.message);
    }
}

async function postData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = {
        title: "Hello GitHub",
        body: "This is a sample post",
        userId: 1
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log("Posted data response:", json);
    } catch (error) {
        console.error(error.message);
    }
}


async function getGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;

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

// Replace 'your-username' with your actual GitHub username
getGitHubUser("your-username");
// Call functions
getData();
postData();
