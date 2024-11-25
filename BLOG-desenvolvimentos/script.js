document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const postsContainer = document.querySelector('.posts-container');
  
    // Alternar tema claro/escuro
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
  
    // Lista de posts
    const posts = [
      { title: 'Primeiro Post', content: 'Este é o conteúdo do meu primeiro post!' },
      { title: 'Segundo Post', content: 'Mais informações sobre o segundo post.' },
      { title: 'Outro Tópico', content: 'Explorando outros temas neste post.' },
    ];
  
    // Carregar posts dinamicamente
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  });
  