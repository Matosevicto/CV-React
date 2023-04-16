
import './App.css'
import Zivotopis from './components/Zivotopis'
import OpciPodaci from './components/OpciPodaci'
import Sposobnosti from './components/Sposobnosti'


function App() {

 
 

  return (
    
    <>
    
    <Zivotopis/>
    <OpciPodaci day={27} month=" listopad" year={1998} street= "Cesta Franje Tuđmana 1124" city=" Kaštela" email=" matosevicto@gmail.com"  />
    <Sposobnosti />
    
    
    </>
    
  )
}

export default App
