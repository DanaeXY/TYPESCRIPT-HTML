# Antes de comenzar

Deberemos instalar os paquetes de `node`, para poder utilizar o servidor. 

Neste caso, mediante o comando:

```bash
npm i
```

## Executando o servidor

Despois de ter instalado os paquetes, deberemos executar o servidor mediante:

```bash
node server
```

Deste xeito, en `localhost:3000` veremos o `index.html`

# Observacións

> Deberemos executar o comando `tsc` no directorio raíz, neste caso podémolo ver onde está o arquivo `tsconfig.json`.

Ao mesmo tempo lembrade que deberemos ir os arquivos de `.js` que estén a importar arquivos, xa que por defecto non escriben as extensións. Por exemplo:

```javascript

import { Etiqueta } from "./Clases/Etiqueta";
const instancia = new Etiqueta("div");
instancia.creoEtiqueta();

```

Deberemos reescribir, neste caso o `index.js` a mán.

```javascript

import { Etiqueta } from "./Clases/Etiqueta.js";
const instancia = new Etiqueta("div");
instancia.creoEtiqueta();

```