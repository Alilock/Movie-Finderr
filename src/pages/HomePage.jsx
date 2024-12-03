import { useEffect, useState } from 'react';
import '../App.css';
import Movies from '../components/Movies';
import Searching from '../components/Searching';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesThunk, setMovies } from '../store/slices/movieSlice';
import toast from 'react-hot-toast';

function HomePage() {
    const [inputValue, setInputValue] = useState('avatar')
    const { movies, movie, error, loading } = useSelector(state => state.movieSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMoviesThunk(inputValue))
    }, [inputValue])

    return (
        <div className='min-h-screen  w-full bg-slate-800 p-24 flex flex-col items-center gap-8'>
            <div className='text-5xl text-white'>Movie Finder</div>

            <Searching setInputValue={setInputValue} />
            {loading && <div className='font-bold text-red-700'>Loading...</div>}

            <Movies movies={movies} />
        </div>
    );
}

export default HomePage;
