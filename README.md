# Aplicación y gestión de productividad
## Metodologia Atomic Design
-Atomo: Componente compuesto por un unico atomo, pudiendo tener o no etiquetas HTML o simplemente estar compuesto  por etiquetas HTML.
-Molecula: Componente compuesto por mas de un atomo distinto. 

## Libreria de componentes:
### Configuracion de storybook
- comenzar proyecto con npx sb init
- elegir proyecto de react
- correr proyecto con npm run storybook / yarn storybook
### Diseñar tokens
- Crear archivo tokens/index.js
- Agregar colores de "brand" y "decisions"
- Agregar estilos globales
### Atomos y Moleculas
### Atomos:
- Button
- Heading
- Icon
- Input
### Moleculas:
-ButonIcon

## NPM scripts:
- Se creo script para leer el archivo tokens/index.js y tranformar los tokens en custom properties en un archivo css (styles/tokens.css) 


## NPM comandos: 
### comando: "npm run storybook" / "yarn storybook"
- Levanta servidor local de storybook, donde se prodran observar todos los componentes de la aplicacion en sus diferentes versiones.
### npm run build-tokens / yarn build-tokens:
- Ejecuta el script script/build-tokens.js 
