document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = {
                login: form.login.value,
                senha: form.senha.value,
                lembrar: document.getElementById('lembrar').checked
            };

            const res = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (res.ok) {
                window.location.href = 'index.html';
            } else {
                alert('Usuário ou senha incorretos');
            }
        });
    } else {
        // carregar usuários
        fetch('/usuarios')
            .then(res => res.json())
            .then(usuarios => {
                const tbody = document.querySelector('#usuarios tbody');
                usuarios.forEach(u => {
                    const row = `<tr><td>${u.nome}</td><td>${u.endereco}</td><td>${u.cpf}</td></tr>`;
                    tbody.insertAdjacentHTML('beforeend', row);
                });
            });
    }
});
