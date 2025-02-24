# EXEMPLO DE USO DE FUNCIONES

## INTRODUCCIÓN

Neste exemplo móstrase a importación de funcións en TypeScript.

## NOTAS

### 1.Deberase modificar o arquivo `tsconfig.json` para que se importen las funciones de TypeScript. 

```json

{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
  
    /* Modules */
    "module":"ES2022",                                /* Specify what module code is generated. */
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
    
    /* Emit */
     "outDir": "./public/javascript/",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```


Deberedes escribir a extensión `.js` nas carpetas onde se estén a importar arquivos, neste caso `public/javascript/index.js` sairá deste xeito:

```javascript
import { selecionDato } from "./funcions";
selecionDato();
```
e deberemos escribir: 
```javascript
import { selecionDato } from "./funcions.js";
selecionDato();
```
### 2. Deberedes instalar 'express', co seguinte comando instalaredes todos os paquetes necesarios:

```bash
npm install express
```
