import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovies } from "../../services/MovieServices"
import toast from "react-hot-toast"


const initialState = {
    movies: [],
    movie: {},
    error: null,
    loading: false
}

export const getMoviesThunk = createAsyncThunk(
    "movie/getMovies",
    async (inputValue, { rejectWithValue }) => {
        try {
            const res = await getMovies(inputValue)
            if (res.data.Response === 'False') {
                return rejectWithValue(res.data.Error)
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setMovie: (state, action) => {
            state.movie = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getMoviesThunk.fulfilled, (state, action) => {
            state.movies = action.payload.Search
            state.loading = false
        })
            .addCase(getMoviesThunk.rejected, (state, action) => {
                state.movies = []
                if (typeof action.payload === 'string') {
                    toast.error(action.payload)
                }
                else {
                    toast.error('System Error')
                }
                state.error = action.payload
                state.loading = false
            })
            .addCase(getMoviesThunk.pending, (state, action) => {
                state.loading = true
            })

    }
})

export const { setMovie, setMovies } = movieSlice.actions
export const movieReducer = movieSlice.reducer