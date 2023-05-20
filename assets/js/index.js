const url = "https://raw.githubusercontent.com/Lina17Landys/Laboratorio-10/main/peliculas.json";

// Obtener el contenedor de imágenes
const imageContainer = document.getElementById("imageContainer");

// Obtener los elementos del contenedor de información de la película
const bannerElement = document.getElementById("banner");
const titleElement = document.getElementById("title");
const sypnopsisElement = document.getElementById("sypnopsis");

// Realizar la petición GET y procesar el JSON
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Obtener el array de películas
    const movies = data.movies;

    // Recorrer el array y mostrar las imágenes
    movies.forEach(movie => {
      // Obtener el valor de "image" de cada película
      const imageUrl = movie.image;

      // Crear un elemento de imagen y establecer su atributo src
      const img = document.createElement("img");
      img.src = imageUrl;

      // Agregar un evento de clic a la imagen usando una función flecha
      img.addEventListener("click", () => {
        // Obtener los elementos de información de la película
        const { title, bannerPic, sypnopsis } = movie;

        // Actualizar el contenido de los elementos del contenedor de información
        bannerElement.src = bannerPic;
        titleElement.innerText = title;
        sypnopsisElement.innerText = sypnopsis;
      });

      // Agregar la imagen al contenedor
      imageContainer.appendChild(img);
    });
  })
  .catch(error => console.log(error));