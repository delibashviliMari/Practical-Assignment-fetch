
function expo(num, power, callback) {
    if (power === 0) return callback(1);
    return callback(num * expo(num, power - 1, callback));
}

// გამოყენების მაგალითი
expo(5, 3, result => console.log(result)); // 125


async function fetchPosts() {
    try {
        const container = document.getElementById("posts-container");
        if (!container) {
            console.error("Error: posts-container element not found in DOM.");
            return;
        }
        
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        
        posts.slice(0, 10).forEach(post => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            container.appendChild(postElement);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchPosts);


async function deepCopyObject(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            return reject(new Error("Argument is not an object"));
        }
        resolve(JSON.parse(JSON.stringify(obj)));
    });
}

// deep copy 
const original = { a: 1, b: { c: 2 } };
deepCopyObject(original)
    .then(copy => console.log("Copied Object:", copy))
    .catch(error => console.error("Error:", error.message));
