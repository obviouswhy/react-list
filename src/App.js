import { useEffect, useState } from 'react';
import './App.css'
import ImageGrid from './components/ImageGrid';
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar';

const App = () =>  {

  const [images, setImages] = useState([])

  const getImages = () => {
    fetch(`https://api.unsplash.com//photos/random?count=5&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
      .then((res) => res.json())
      .then((data) => setImages([...data, ...images]))
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <LandingPage onBtnClick = {() => getImages()} />
      <ImageGrid {...{images}} />
    </div>
  );
}

export default App
