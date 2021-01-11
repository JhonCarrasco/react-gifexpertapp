

export const getGifs = async ( category ) => {

    try {

        const apiKey = 'zd1vrBqsmUqfhjSNG9D2jvH5sMIzygxR';
        const urlApi = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=${apiKey}`
        const resp   = await fetch( urlApi );
        const { data } = await resp.json(); 

        const gifs = data.map( item => {
            return  {
                id: item.id,
                title: item.title,
                url: item.images?.downsized_medium.url
            }
        })

        return gifs 

    } catch (error) {
        // manejo del error
        // console.error(error)
        return []
    }
    
    
    
}