// --- SELEÇÃO DOS ELEMENTOS ---
// Seleciona os elementos que serão manipulados. Fazemos isso no início
// para que o código fique mais organizado e eficiente.
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// --- FUNÇÕES PRINCIPAIS ---

/**
 * Altera o tema do site entre claro e escuro.
 * Adiciona ou remove a classe 'dark-theme' do body e atualiza os ícones.
 * Salva a preferência do usuário no localStorage.
 * @param {string} theme - O tema a ser aplicado ('dark' or 'light').
 */
function setTheme(theme) {
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
    } else {
        body.classList.remove('dark-theme');
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
    }
    // Salva a escolha do usuário no navegador para a próxima visita
    localStorage.setItem('ecobyte-theme', theme);
}

/**
 * Fecha o menu de navegação móvel se ele estiver aberto.
 */
function closeMobileMenu() {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        body.classList.remove('nav-active'); // Remove o overlay
    }
}

// --- CONFIGURAÇÃO INICIAL E EVENTOS ---

// 1. Carregar o tema ao iniciar a página
// Verifica se há um tema salvo no localStorage. Se não, usa a preferência do sistema.
const savedTheme = localStorage.getItem('ecobyte-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);


// 2. Evento para o botão de menu hambúrguer
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    body.classList.toggle('nav-active'); // Adiciona/remove a classe para o overlay
});


// 3. Evento para o botão de alternar tema
themeToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique feche o menu imediatamente
    const isDark = body.classList.contains('dark-theme');
    setTheme(isDark ? 'light' : 'dark');
});


// 4. Evento para fechar o menu ao clicar em um link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // Não fecha o menu se o clique for no container do theme-toggle
        if (!link.querySelector('#theme-toggle')) {
            closeMobileMenu();
        }
    });
});


// 5. Evento para fechar o menu ao clicar fora dele (no overlay)
document.addEventListener('click', (event) => {
    // Verifica se o menu está ativo e se o clique não foi no menu nem no botão que o abre
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (navMenu.classList.contains('active') && !isClickInsideNav && !isClickOnToggle) {
        closeMobileMenu();
    }
});
