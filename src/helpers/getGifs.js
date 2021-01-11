export const getGifs = async ( category ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=pdWTEcOlTRHL6tj1Xh7f3M1R8uRibaC9`;

    const res = await fetch(URL);
    const { data } = await res.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    });

    return gifs;
};