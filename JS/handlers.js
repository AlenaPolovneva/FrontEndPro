import { createPost, fetchPosts, fetchComments } from './api.js';
import { createPostElement, createCommentElement } from './dom.js';

const postsContainer = document.getElementById('posts');
const postForm = document.getElementById('postForm');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');
export async function loadPosts() {
    try {
        const posts = await fetchPosts();
        posts.forEach(post => {
            const postEl = createPostElement(post);
            postsContainer.appendChild(postEl);
        });
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}
export function setupEventListeners() {
    postForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = titleInput.value.trim();
        const body = bodyInput.value.trim();

        if (title && body) {
            try {
                const newPost = await createPost(title, body);
                console.log('The post has been created:', newPost);
                const postEl = createPostElement(newPost);
                postsContainer.prepend(postEl);
                titleInput.value = '';
                bodyInput.value = '';
            } catch (error) {
                console.error('Error creating post:', error);
            }
        }
    });

    postsContainer.addEventListener('click', async (e) => {
        if (e.target.classList.contains('load-comments')) {
            const postId = e.target.dataset.postId;
            const button = e.target;
            try {
                const comments = await fetchComments(postId);
                const commentsDiv = document.getElementById(`comments-${postId}`);
                if (commentsDiv.children.length > 0) return;

                comments.forEach(comment => {
                    const commentEl = createCommentElement(comment);
                    commentsDiv.appendChild(commentEl);
                });
                button.disabled = true;
            } catch (error) {
                console.error('Error loading comments:', error);
            }
        }
    });
}