// This file contains JavaScript code for client-side functionality, enhancing user interaction on the web pages.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blog-form');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            title: formData.get('title'),
            content: formData.get('content')
        };

        fetch('/api/generate-blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            output.innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`;
        })
        .catch(error => {
            console.error('Error:', error);
            output.innerHTML = '<p>There was an error generating the blog post.</p>';
        });
    });
});