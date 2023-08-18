import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { MovieApi } from '../../common/apis/movieApi';
import { ApiKey } from '../../common/apis/movieapikey';

const movieText="A river"
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async ()=>{
    const response =  await MovieApi.get(`?apikey=${ApiKey}&s=${movieText}&type=movie`)
    .catch(err=>{
        console.log('Error: ',err)
    })
    return response.data
})

const initialState = {} 
const MovieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers: {
        addMovies: (state, action) =>{
            state.movies = action.payload
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: ()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, action)=>{
            console.log("API Successfull!")
            return {...state, movies: action.payload}
        },
        [fetchAsyncMovies.rejected]: ()=>{
            console.log("API Rejected!")
           
        }
    }
})

export const {addMovies} = MovieSlice.actions;
export default MovieSlice.reducer