import { loadPosts, setupEventListeners } from './handlers.js';

document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    setupEventListeners();
});