
export const getGifs = async (category) => {
    //este objeto viene como un array
    //encodeURI() elimina espacios en blanco
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=mH85BKgRE1ihrZaNTTl78lOmO5Morl8d`;
    const resp = await fetch(url);
    //desestructuturo para acceder a los elementos del array
    const {data} = await resp.json();
    //mapeo para obtener solo lo que quiero
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url:img.images?.downsized_medium.url
        }
    })

    return gifs;
}