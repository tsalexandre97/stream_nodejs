# 📜 Node.js Streams Playground

🚀 **Explorando o poder das Streams no Node.js** para manipulação eficiente de dados!

## 📌 Sobre o projeto
Este projeto demonstra o uso de **Streams no Node.js**, mostrando como processar grandes volumes de dados sem comprometer a memória do sistema.

## 🎯 Funcionalidades
- 📄 Leitura e escrita de arquivos usando Streams
- 🔄 Transform Streams para manipulação de dados
- 📡 Stream de rede para comunicação eficiente
- 🎥 Streaming de vídeos e grandes arquivos
- ⏸️ Controle de fluxo com `pause()` e `resume()`

## 🛠️ Tecnologias Utilizadas
- **Node.js** (módulo `stream`)
- **JavaScript** (ES6+)
- **fs (File System)** para manipulação de arquivos

## 🚀 Como rodar o projeto
### 🔧 Pré-requisitos
Certifique-se de ter o **Node.js** instalado na sua máquina.

### ▶️ Executando o projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/tsalexandre97/stream_nodejs.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd stream_nodejs
   ```
3. Instale as dependências (se necessário):
   ```sh
   npm install
   ```
4. Execute o script principal:
   ```sh
   node index.js
   ```

## 📝 Exemplos de Uso
### 📖 Leitura de arquivos em chunks
```js
const fs = require('fs');

const readStream = fs.createReadStream('arquivo.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('Novo chunk recebido:', chunk);
});

readStream.on('end', () => {
    console.log('Leitura completa!');
});
```

### 🔀 Encadeamento de Streams (`pipe`)
```js
const fs = require('fs');

const readStream = fs.createReadStream('entrada.txt');
const writeStream = fs.createWriteStream('saida.txt');

readStream.pipe(writeStream);
```

## 📚 Aprendizados
- Como **ler e escrever arquivos** de forma eficiente
- Como os **eventos de Streams** funcionam (`data`, `end`, `error`)
- Como usar **Transform Streams** para modificar dados em tempo real

## 📌 Próximos Passos
- 🏗️ Implementar um servidor HTTP usando Streams
- 📦 Criar um sistema de compressão de arquivos com `zlib`
- 🎬 Streaming de vídeos em tempo real

## 📄 Licença
Este projeto está sob a licença **MIT**.

---
💡 **Dúvidas ou sugestões?** Sinta-se à vontade para abrir uma issue ou contribuir com o projeto! 😊
