<img src="https://neurona-ba.com/wp-content/uploads/2021/07/HenryLogo.jpg" alt="Henry Logo" height="20%" width="20%">

# **POKEMON** | Proyecto Individual

## **PROJECT SCREENS**

### **Landing Page**
![Landing Page](https://github.com/pablo-salituri/Proyecto.Individual-Pokemon.App/assets/116605759/bc60e2d5-f372-449a-926b-ae410fd1fe8e)

<br />

### **Home 1/2**
![Home 1](https://github.com/pablo-salituri/Proyecto.Individual-Pokemon.App/assets/116605759/0aac3b96-5f99-4408-8288-48dbd6b93e06)

<br />

### **Home 2/2**
![Home 2](https://github.com/pablo-salituri/Proyecto.Individual-Pokemon.App/assets/116605759/90e3f402-c2a9-4a54-b0cc-8d4b1786306c)

<br />

### **Detail Page**
![Detail](https://github.com/pablo-salituri/Proyecto.Individual-Pokemon.App/assets/116605759/5b8faac7-1942-40da-9838-3cbed85558e6)

<br />

### **Tus pokemones**
![Tus Pokemones](https://github.com/pablo-salituri/Proyecto.Individual-Pokemon.App/assets/116605759/fe64e08e-39ec-4d92-89d7-58ff98d69996)

<br />

### **Crear Pokemon**
![Create](https://github.com/pablo-salituri/Proyecto.Individual-Pokemon.App/assets/116605759/953ca6ea-ebfc-44eb-8ed1-18b536aa4094)

<br />

### **Eliminar Pokemon**
![Delete](https://github.com/pablo-salituri/Proyecto.Individual-Pokemon.App/assets/116605759/863135d9-165b-4e6d-818a-7b93d18955a7)

<br />

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />

---

## **📖 ENUNCIADO GENERAL**

La idea de este proyecto es construir una aplicación web a partir de la API [**pokeapi**](https://pokeapi.co/) en la que se pueda:

-  Buscar pokemones.
-  Visualizar la información de los pokemones.
-  Filtrarlos.
-  Ordenarlos.
-  Crear nuevos pokemones.

⚠️ Para las funcionalidades de filtrado y ordenamiento NO se puede utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados.

### **Únicos end-points que se pueden utilizar**

-  [**PokeApi**](https://pokeapi.co/api/v2/pokemon)
-  **Por id**: _"https://pokeapi.co/api/v2/pokemon/{id}"_
-  **Por nombre**: _"https://pokeapi.co/api/v2/pokemon/{name}"_
-  **Por tipo**: _"https://pokeapi.co/api/v2/type"_

<br />

---

## **📁 INSTRUCCIONES**

### **🖱 BASE DE DATOS**

Deberás crear dos modelos para tu base de datos. Una será para los pokemones y la otra será para los tipos de pokemones (pueden llevar el nombre que tu quieras). La relación entre ambos modelos debe ser de muchos a muchos. A continuación te dejamos las propiedades que debe tener cada modelo. Aquellas marcadas con un asterísco son obligatorias.

**📍 MODELO 1 | Pokemons**

-  ID. \*
-  Nombre. \*
-  Imagen. \*
-  Vida. \*
-  Ataque. \*
-  Defensa. \*
-  Velocidad.
-  Altura.
-  Peso.

<br />

**📍 MODELO 2 | Type**

-  ID. \*
-  Nombre. \*

<br />

---

### **🖱 BACK-END**

Para esta parte deberás construir un servidor utilizando **NodeJS** y **Express**. Tendrás que conectarlo con tu base de datos mediante **Sequelize**.

Tu servidor deberá contar con las siguientes rutas:

#### **📍 GET | /pokemons**

-  Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

#### **📍 GET | /pokemons/:idPokemon**

-  Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
-  El pokemon es recibido por parámetro (ID).
-  Tiene que incluir los datos del tipo de pokemon al que está asociado.
-  Debe funcionar tanto para los pokemones de la API como para los de la base de datos.

#### **📍 GET | /pokemons/name?="..."**

-  Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el pokemon, debe mostrar un mensaje adecuado.
-  Debe buscar tanto los de la API como los de la base de datos.

#### **📍 POST | /pokemons**

-  Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (al menos uno).

#### **📍 GET | /types**

-  Obtiene un arreglo con todos los tipos de pokemones.
-  En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
-  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

<br />

---

### **🖱 FRONT-END**

Se debe desarrollar una aplicación utilizando **React** y **Redux** que contenga las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

-  Alguna imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

-  SearchBar: un input de búsqueda para encontrar pokemon por nombre. La búsqueda debe ser exacta, por lo que sólo lo encontrará si se lo busca con su nombre completo.
-  Sector en el que se vea un listado de cards con los pokemones. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /pokemons`** y deberá mostrar su:
   -  Imagen.
   -  Nombre.
   -  Tipos.
-  Cuando se le hace click a una Card deberá redirigir al detalle de ese pokemon específico.
-  Botones/Opciones para **filtrar** por tipo, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.
-  Paginado: el listado de pokemones se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 12 pokemones por página.

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un pokemon:

-  ID.
-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Tipo.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear un nuevo pokemon.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Posibilidad de seleccionar/agregar varios tipos en simultáneo.
-  Botón para crear el nuevo pokemon.

> [**IMPORANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre del pokemon no pueda contener números, o que la defensa no pueda exceder determinado valor, etc.

<br />

---

### **🖱 TESTING**

Ten en cuenta que en esta instancia no es obligatorio el desarrollo de testing para tu aplicación. De igual manera, te desafiamos a que los hagas, ¡ya que suman puntos!

-  Al menos tener un componente del frontend con sus tests respectivos.
-  Al menos tener dos rutas del backend con sus tests respectivos.
-  Al menos tener un modelo de la base de datos con sus tests respectivos.
