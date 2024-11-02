var dicionario;

function i(chave) {
    if (dicionario[chave]) return dicionario[chave];
    return dicionario;
}

function initInternacionalizacao(idioma) {
    for (let i = 0; i < idiomas.length; i++) {
        if (idiomas[i].hasOwnProperty(idioma)) {
            dicionario = idiomas[i][idioma];
            return;
        }
    }
}

function atualizarTraducao() {
    console.log(1234)
    try {
        for (let chave in dicionario) {
            if (dicionario.hasOwnProperty(chave)) {
                const elementos = document.querySelectorAll(`[data-id="${chave}"]`);

                elementos.forEach(item => {
                    item.innerHTML = i(chave);
                });
            }
        }
    } catch (error) {
        console.error(error); // Melhora a visibilidade do erro
    }
}

// Atribuindo as funções diretamente ao objeto window
window.initInternacionalizacao = initInternacionalizacao;
window.atualizarTraducao = atualizarTraducao;
