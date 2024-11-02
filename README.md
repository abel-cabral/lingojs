LingoJS v1.5.0

## Authors

- [@abel-cabral](https://www.github.com/abel-cabral)

## Download e Demonsotração

[Download](https://github.com/abel-cabral/Internacionalizacao/releases)

[Demonstração](https://lingojs.abelcode.dev)

## Instalação

# Biblioteca de Internacionalização

Esta biblioteca oferece suporte à internacionalização do seu site, permitindo que você traduza facilmente seu conteúdo para diferentes idiomas. Siga os passos abaixo para integrá-la ao seu projeto.

## Passo 1: Importar Scripts no HTML

Certifique-se de importar os scripts `lingo.config.js` e `lingo.js` no cabeçalho do seu HTML, nessa ordem, para evitar erros de idioma.

```html
<script src="./assets/lib/lingo.config.js"></script>
<script src="./assets/lib/lingo.js"></script>
```

## Passo 2: Inicializar a Biblioteca

Em um script externo ou no final do seu html entre as tags <script></script>no topo da sua página, inicialize a biblioteca.

```html
<script>
  initInternacionalizacao("PTBR");
  atualizarTraducao();
</script>
```

Chame initInternacionalizacao("PTBR") para definir o idioma padrão (Português do Brasil), entre outros, e atualizarTraducao() para iniciar a tradução assim que a página carregar.

## Passo 3: Configurar as Traduções

Acesse o arquivo lingo.config.js dentro da pasta da sua biblioteca e relacione chave e valor para cada tradução desejada.

```javascript
var idiomas = [
  {
    PTBR: {
      ola_mundo: "Olá Mundo",
      desenvolvedor: "desenvolvido por",
    },
  },
  {
    ENG: {
      ola_mundo: "Hello World",
      desenvolvedor: "developed by",
    },
  },
  {
    ESP: {
      ola_mundo: "Hola que tal",
      desenvolvedor: "bienvenido por",
    },
  },
];
```

Cada objeto dentro do array idiomas representa um idioma com suas respectivas traduções.

## Passo 4: Usar as Traduções no HTML

Adicione data-id correspondentes às chaves de tradução nos elementos HTML.

```javascript
    <h2 data-id="ola_mundo">Bem-Vindo!</h2>
    <p data-id="desenvolvedor"></p>
```

O texto entre as tags não é necessário, pois será substituído pelo texto da tradução.

## Passo 5: Alternar Idiomas (Opcional)

Você pode criar funções para alterar o idioma a qualquer momento.

```javascript
function lingoIt() {
  initInternacionalizacao("ENG");
  atualizarTraducao();
}
```
