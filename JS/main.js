import { loadPosts, setupEventListeners } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    setupEventListeners();
});