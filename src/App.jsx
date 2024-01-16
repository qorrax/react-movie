import react from 'react'
import Ghibli from './assets/Ghibli.jpeg'



import './App.css'
import MovieList from './components/ui/ MovieList'

const App = () => {

  return (
  <>
  <div className="flex justify-center items-center p-8">
      <img src={Ghibli} alt="Studio Ghibli Logo" className="w-1/3" />
      <div className="ml-8">
        <h1 className="text-3xl font-bold">Studio Ghibli Movie APP</h1>
      </div>
  </div>
  <MovieList />
</>

  )};



export default App;


    





