const postsContainer = document.getElementById('posts');
const postForm = document.getElementById('postForm');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');

function loadPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postEl =document.createElement('div');
                postEl.className = 'post-card';
                postEl.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button onclick="loadComments(${post.id}, this)">Download comme</button>
                <div class="comments" id="comments-${post.id}"></div>
                 `;
                postsContainer.appendChild(postEl);
            })
        })
}
function loadComments(postId, button) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`)
        .then(response => response.json())
        .then(comments => {
            const commentsDiv =document.getElementById(`comments-${postId}`);
            comments.forEach(comment => {
                const commentEl = document.createElement('div');
                commentEl.className = 'comment'
                commentEl.innerHTML = `<strong>${comment.name}</strong> (${comment.email}):<br>${comment.body}`;
                commentsDiv.appendChild(commentEl);
            });
            button.disabled = true;
        })
        }
        postForm.addEventListener('submit', function (e){
        e.preventDefault();
        const title = titleInput.value;
        const body = bodyInput.value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, body, userId: 1 })
        })
            .then(response => response.json())
            .then(data => {
                console.log('The post has been created:', data);
            })
            });
loadPosts();