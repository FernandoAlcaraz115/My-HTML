document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const sourceLanguage = document.getElementById('source-language');
    const targetLanguage = document.getElementById('target-language');
    const sourceIcon = document.getElementById('source-icon');
    const targetIcon = document.getElementById('target-icon');
    
    // Emojis para cada lenguaje
    const languageIcons = {
        'python': '🐍',
        'java': '☕',
        'javascript': '📜',
        'cpp': '⚡',
        'csharp': '🔷',
        'php': '🐘',
        'ruby': '💎'
    };
    
    // Función para actualizar íconos
    function updateIcons() {
        const sourceValue = sourceLanguage.value;
        const targetValue = targetLanguage.value;
        
        console.log('Actualizando íconos:', sourceValue, targetValue);
        
        // Actualizar source icon
        if (languageIcons[sourceValue]) {
            sourceIcon.textContent = languageIcons[sourceValue];
        }
        
        // Actualizar target icon
        if (languageIcons[targetValue]) {
            targetIcon.textContent = languageIcons[targetValue];
        }
    }
    
    // Inicializar
    updateIcons();
    
    // Event listeners
    sourceLanguage.addEventListener('change', function() {
        console.log('Source cambió a:', this.value);
        updateIcons();
    });
    
    targetLanguage.addEventListener('change', function() {
        console.log('Target cambió a:', this.value);
        updateIcons();
    });
    
    // Resto del código...
    const sourceCode = document.getElementById('source-code');
    const targetCode = document.getElementById('target-code');
    const translateBtn = document.getElementById('translate-btn');
    const clearSourceBtn = document.getElementById('clear-source');
    const clearTargetBtn = document.getElementById('clear-target');
    const copyTargetBtn = document.getElementById('copy-target');
    const pasteSourceBtn = document.getElementById('paste-source');
    
    translateBtn.addEventListener('click', function() {
        alert('Función de traducción con IA - En desarrollo');
    });
    
    clearSourceBtn.addEventListener('click', function() {
        sourceCode.value = '';
    });
    
    clearTargetBtn.addEventListener('click', function() {
        targetCode.value = '';
    });
    
    copyTargetBtn.addEventListener('click', function() {
        if (targetCode.value) {
            targetCode.select();
            document.execCommand('copy');
            alert('Código copiado al portapapeles');
        }
    });
    
    pasteSourceBtn.addEventListener('click', function() {
        navigator.clipboard.readText()
            .then(text => {
                sourceCode.value = text;
            })
            .catch(err => {
                alert('No se pudo acceder al portapapeles');
            });
    });
});