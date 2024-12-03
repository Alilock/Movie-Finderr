import axios from "axios"

export const getMovies = async (inputValue) => {
    return await axios.get(`https://omdbapi.com/?apikey=fc1fef96&s=${inputValue}`)
}