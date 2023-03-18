import axios from "axios";
const apiKey  = process.env.REACT_APP_APIKEY
const baseUrl  = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
   const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)

//    console.log({movieList: movie})
   return movie.data.results
}

export const searchMovie = async(props) => {
    const movie = await axios.get(`${baseUrl}/search/movie?query=${props}&page=1&api_key=${apiKey}`)
    return movie.data
    // console.log(props)
}