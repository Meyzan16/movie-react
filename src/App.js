
import './App.css';
import {getMovieList, searchMovie} from "./api"
import { useEffect, useState } from 'react';

function App() {
  


  // menampung isi varibel , usestate adalah menyimpan data sementara
  const [getPopolerMovies, setPopolerMovies]  = useState([])

  // jika data nya masih promise maka gunakan then then
  useEffect(() => {
    // setPopolerMovies(getMovieList())
    getMovieList().then((result) => {
      setPopolerMovies(result)
    })
  }, []) 

  // cek data di get nya sudah ada atau belum 
  console.log({getPopolerMovies: getPopolerMovies})

  const PopularMovies = () => {
    return getPopolerMovies.map((movie, i) => {
      return (
            <div className="Movie-wrapper" key={i}>
              <div className="Movie-title">{movie.title}</div>
                <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
              <div className="Movie-date">release : {movie.release_date}</div>
              <div className="Movie-rate">{movie.vote_average}</div>
            </div>
      )
    })
  }

  // pemanggilan search movie
  const search = async(props) => {
    if(props.length > 3) {
      const query = await searchMovie(props)

      // results di ambil dari nama array nya
      setPopolerMovies(query.results)
      // console.log({query: query})
    }

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>THE MOVIE</h1>
          <input placeholder='cari film anda' 
          className='Movie-search'
          // untuk kita tau perubahan apa yang terjadi
          onChange={({target}) => search(target.value)}/>
        <div className="Movie-container">
            <PopularMovies />
            
        </div>
      </header>
    </div>
  );
}

export default App;
