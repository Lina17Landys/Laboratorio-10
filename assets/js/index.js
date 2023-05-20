const url = "https://raw.githubusercontent.com/Lina17Landys/Laboratorio-10/main/peliculas.json";

const imageContainer = document.getElementById("imageContainer");

const bannerElement = document.getElementById("banner");
const titleElement = document.getElementById("title");
const sypnopsisElement = document.getElementById("sypnopsis");

fetch(url)
  .then(response => response.json())
  .then(data => {
    const movies = data.movies; 
    movies.forEach(movie => {
      const imageUrl = movie.image;

      const img = document.createElement("img");
      img.src = imageUrl;
      img.addEventListener("click", () => {
        
        const { title, bannerPic, sypnopsis } = movie;

        bannerElement.src = bannerPic;
        titleElement.innerText = title;
        sypnopsisElement.innerText = sypnopsis;
      });

      imageContainer.appendChild(img);
    });
  })
  .catch(error => console.log(error));
