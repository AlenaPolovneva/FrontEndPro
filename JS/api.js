const BASE_URL = 'https://jsonplaceholder.typicode.com';
export async function fetchPosts(limit = 10) {
    const response = await fetch(`${BASE_URL}/posts?_limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to load posts');
    }
    return response.json();
}

export async function createPost(title, body) {
    const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId: 1 })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}
export async function fetchComments(postId, limit = 2) {
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments?_limit=${limit}`);
    if (!response.ok) {
        throw new Error('Failed to load comments');
    }
    return response.json();
}