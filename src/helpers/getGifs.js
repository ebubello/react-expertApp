  //Conecto con la API
  export const getGifs = async(category) => {
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=DE643rERgo66Or6ltqgKrg1beMMAZhxG`;
      const respuesta = await fetch(url);
      const { data } = await respuesta.json();

      //Guardo la información de la API en gifs.
      const gifs = data.map((img) => {
          return {
              id: img.id,
              title: img.title,
              url: img.images?.downsized_medium.url,
          }
      })

      //console.log(gifs);
      //setImages(gifs); // Seteo con la infor de "gifs".
      return gifs;
  };