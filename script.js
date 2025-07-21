/* Font Import */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ================================================ */
/* PARTE 1: VARIÁVEIS E ESTILOS GERAIS              */
/* ================================================ */

:root {
    --color-primary-green: #4CAF50;
    --color-primary-green-rgb: 76, 175, 80;
    --color-dark-green: #388E3C;
    --color-light-green: #E8F5E9;
    --color-accent-green: #A5D6A7;
    --color-text-dark: #263238;
    --color-text-medium: #546E7A;
    --color-background-light: #F9FBE7;
    --color-white: #FFFFFF;
    --color-black: #212121;
    --shadow-light: 0 2px 10px rgba(0, 0, 0, 0.05);
    --shadow-medium: 0 5px 20px rgba(0, 0, 0, 0.1);
    --shadow-strong: 0 10px 30px rgba(0, 0, 0, 0.15);
    --border-radius-sm: 6px;
    --border-radius-md: 12px;
    --border-radius-lg: 24px;
    --transition-speed: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: background-color var(--transition-speed), color var(--transition-speed);
}

body.dark-theme {
    --color-primary-green: #66BB6A;
    --color-primary-green-rgb: 102, 187, 106;
    --color-dark-green: #4CAF50;
    --color-light-green: #3A4750;
    --color-accent-green: #5A875C;
    --color-text-dark: #ECEFF1;
    --color-text-medium: #CFD8DC;
    --color-background-light: #212121;
    --color-white: #2C2C2C;
    --color-black: #B0BEC5;
    --shadow-light: 0 2px 10px rgba(255, 255, 255, 0.05);
    --shadow-medium: 0 5px 20px rgba(0, 0, 0, 0.3);
    --shadow-strong: 0 10px 30px rgba(0, 0, 0, 0.5);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--color-background-light);
    color: var(--color-text-dark);
    line-height: 1.7;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* ======================================================= */
/* PARTE 2: CABEÇALHO E NAVEGAÇÃO (ESTRUTURA PADRÃO)      */
/* ======================================================= */

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 60px;
    background-color: var(--color-white);
    box-shadow: var(--shadow-light);
    position: sticky;
    top: 0;
    z-index: 1001;
    border-bottom: 2px solid var(--color-accent-green);
    transition: background-color var(--transition-speed), box-shadow var(--transition-speed), border-color var(--transition-speed);
}

.logo {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--color-black);
    text-decoration: none;
    transition: color var(--transition-speed), transform var(--transition-speed);
}

.logo span {
    color: var(--color-primary-green);
}

.logo:hover {
    transform: translateY(-2px) scale(1.02);
    color: var(--color-primary-green);
}

/* Navigation (Desktop) */
.nav {
    display: flex;
    gap: 25px;
    align-items: center;
}

.nav button {
    background-color: transparent;
    color: var(--color-text-dark);
    border: 1px solid transparent;
    padding: 10px 20px;
    border-radius: var(--border-radius-lg);
    transition: var(--transition-speed);
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1rem;
}

.nav button:hover {
    background-color: var(--color-light-green);
    color: var(--color-dark-green);
    border-color: var(--color-accent-green);
    transform: translateY(-3px);
    box-shadow: var(--shadow-light);
}

.menu-toggle {
    display: none;
    font-size: 2.2rem;
    cursor: pointer;
    color: var(--color-primary-green);
}

/* Theme Toggle Button within Navigation */
.theme-toggle-container-nav {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.theme-toggle-button-in-nav {
    background-color: transparent;
    color: var(--color-text-dark);
    border: 1px solid var(--color-accent-green);
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    cursor: pointer;
}

.theme-toggle-button-in-nav span {
    display: none;
}

body.dark-theme .theme-toggle-button-in-nav {
    color: var(--color-text-dark);
}

/* ============================================================= */
/* PARTE 3: CONTEÚDO ESPECÍFICO DA PÁGINA "SOBRE NÓS"         */
/* ============================================================= */

.about-page-content {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 80px auto 60px auto;
    padding: 40px 60px;
    background-color: var(--color-white);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-light);
    transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
}

.about-us-main-text {
    margin-bottom: 60px;
}

.about-us-main-text h2,
.integrantes-column h2 {
    color: var(--color-dark-green);
    font-size: 2.8rem;
    margin-bottom: 2rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    padding-bottom: 15px;
}

.about-us-main-text h2::after,
.integrantes-column h2::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 90px;
    height: 4px;
    background-color: var(--color-primary-green);
    border-radius: 2px;
}

.about-us-main-text p {
    font-size: 1.15rem;
    margin-bottom: 1.8rem;
    text-align: justify;
    line-height: 1.8;
    color: var(--color-text-medium);
}

.integrantes-column {
    background: linear-gradient(135deg, var(--color-background-light), var(--color-light-green));
    padding: 40px 30px;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-medium);
}

.alunos-container {
    display: flex;
    flex-wrap: wrap; /* Permite que os cards quebrem a linha */
    justify-content: center;
    gap: 2rem;
    padding: 20px 0;
}

.aluno-card {
    background-color: var(--color-white);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-medium);
    padding: 2rem;
    text-align: center;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: var(--transition-speed);
}

.aluno-card img {
    max-width: 100px;
    height: 100px;
    object-fit: cover; /* Garante que a imagem preencha o círculo */
    border-radius: 50%;
    margin-bottom: 1rem;
    box-shadow: var(--shadow-light);
}

.aluno-name {
    font-weight: 600;
    color: var(--color-dark-green);
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.4;
}

.instagram-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--color-primary-green);
    transition: var(--transition-speed);
}

.instagram-link svg {
    width: 30px;
    height: 30px;
    fill: var(--color-white);
}

.aluno-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-strong);
}

/* Dark Theme para a página Sobre Nós */
body.dark-theme .about-page-content { background-color: var(--color-white); }
body.dark-theme .about-us-main-text h2,
body.dark-theme .integrantes-column h2 { color: var(--color-primary-green); }
body.dark-theme .about-us-main-text p { color: var(--color-text-medium); }
body.dark-theme .integrantes-column { background: linear-gradient(135deg, #2C2C2C, #3A4750); }
body.dark-theme .aluno-card { background-color: var(--color-white); }
body.dark-theme .aluno-name { color: var(--color-text-dark); }
body.dark-theme .instagram-link { background-color: var(--color-dark-green); }
body.dark-theme .instagram-link:hover { background-color: var(--color-primary-green); }

/* ======================================================= */
/* PARTE 4: RESPONSIVIDADE E RODAPÉ (ESTRUTURA PADRÃO)   */
/* ======================================================= */

@media (max-width: 992px) {
    .header {
        padding: 15px 30px;
    }

    .nav {
        display: none;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: -300px;
        width: 300px;
        height: 100%;
        background-color: var(--color-white);
        padding: 80px 30px 20px 30px;
        box-shadow: var(--shadow-strong);
        z-index: 1000;
        transition: right var(--transition-speed);
        overflow-y: auto;
    }

    .nav.active {
        right: 0;
        display: flex;
    }

    .nav a,
    .nav div {
        width: 100%;
    }

    .nav button {
        width: 100%;
        margin-bottom: 15px;
        text-align: left;
    }

    .menu-toggle {
        display: block;
    }

    .theme-toggle-container-nav {
        margin-left: 0;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid var(--color-accent-green);
    }

    .theme-toggle-button-in-nav span {
        display: inline-block;
    }

    body.nav-active::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    /* Ajustes da página Sobre Nós para mobile */
    .about-page-content {
        margin: 60px 20px;
        padding: 30px;
    }
}

@media (max-width: 768px) {
    .about-us-main-text h2,
    .integrantes-column h2 {
        font-size: 2rem;
    }

    .about-us-main-text p {
        font-size: 1rem;
    }
}

footer {
    margin-top: auto;
    background-color: var(--color-black);
    color: #f0f0f0;
    padding: 20px 30px;
    font-size: 0.85rem;
    text-align: center;
    border-top: 3px solid var(--color-primary-green);
}
