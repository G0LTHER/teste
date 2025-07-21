// Para esta animação, o JavaScript não é estritamente necessário,
// pois tudo é controlado por CSS.
// No entanto, você pode usá-lo para adicionar funcionalidades, como:
// - Redirecionar para outra página após um tempo.
// - Esconder a tela de carregamento quando o conteúdo principal estiver pronto.

document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de como você poderia remover a tela de carregamento após alguns segundos
    // (Apenas para demonstração, descomente se quiser testar)

    /*
    setTimeout(() => {
        const loadingContainer = document.querySelector('.loading-container');
        if (loadingContainer) {
            loadingContainer.style.opacity = '0';
            loadingContainer.style.transition = 'opacity 1s ease-out';
            setTimeout(() => {
                loadingContainer.style.display = 'none';
                // Aqui você carregaria o conteúdo principal da página
            }, 1000);
        }
    }, 5000); // Esconde a tela de carregamento após 5 segundos
    */
});