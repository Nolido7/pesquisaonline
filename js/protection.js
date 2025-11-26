// Proteção contra clonagem e download
(function() {
    'use strict';

    // Desabilitar botão direito do mouse
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Desabilitar seleção de texto
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Desabilitar arrastar imagens e elementos
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Desabilitar atalhos de teclado comuns
    document.addEventListener('keydown', function(e) {
        // Ctrl+S (Salvar)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }
        // Ctrl+A (Selecionar tudo)
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            return false;
        }
        // Ctrl+C (Copiar)
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            return false;
        }
        // Ctrl+V (Colar)
        if (e.ctrlKey && e.key === 'v') {
            e.preventDefault();
            return false;
        }
        // Ctrl+X (Cortar)
        if (e.ctrlKey && e.key === 'x') {
            e.preventDefault();
            return false;
        }
        // Ctrl+P (Imprimir)
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (Ver código fonte)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C (Inspector)
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }
        // F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (alternativa)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (alternativa)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C (alternativa)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
    });

    // Proteção contra DevTools (detecção de redimensionamento)
    let devtools = {open: false, orientation: null};
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
            if (!devtools.open) {
                devtools.open = true;
                document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-size:24px;color:red;font-weight:bold;">Acesso não autorizado detectado!</div>';
                window.location.href = 'about:blank';
            }
        } else {
            devtools.open = false;
        }
    }, 500);

    // Proteção contra iframe embedding
    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }

    // Desabilitar cópia via console
    Object.defineProperty(document, 'hidden', {
        get: function() {
            return false;
        }
    });

    // Proteção contra screenshots (limitada - apenas dificulta)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.body.style.display = 'none';
        } else {
            document.body.style.display = 'block';
        }
    });

    // Bloquear acesso via console
    (function() {
        function noop() {
            return function() {};
        }
        const methods = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];
        methods.forEach(function(method) {
            console[method] = noop();
        });
    })();

    // Proteção adicional: desabilitar arrastar para fora
    document.addEventListener('drag', function(e) {
        e.preventDefault();
        return false;
    });

    // Adicionar marca d'água invisível (para rastreamento)
    const watermark = document.createElement('div');
    watermark.style.cssText = 'position:fixed;bottom:0;right:0;opacity:0.01;pointer-events:none;font-size:1px;color:transparent;user-select:none;';
    watermark.textContent = 'PROTECTED-' + Date.now();
    document.body.appendChild(watermark);

    // Proteção contra impressão
    window.addEventListener('beforeprint', function(e) {
        e.preventDefault();
        return false;
    });

    // Mensagem de aviso
    console.log('%c⚠️ ATENÇÃO ⚠️', 'color: red; font-size: 50px; font-weight: bold;');
    console.log('%cEste é um recurso do navegador destinado a desenvolvedores. Não insira código aqui!', 'color: red; font-size: 20px;');

})();

