
import Card from 'react-bootstrap/Card'
import '../styles.css'



function OpciPodaci(props){
    
 
 return (
    <Card id="card" style={{ backgroundColor:'#2b6777', padding:'0px 0px 30px'}}>  
        <h2 className='naslov'>Opći podaci</h2>
        <hr />
        <a><h4 className='parent' >Datum Rođenja:</h4>
        <h4 className='child' >{props.day}.{props.month}.{props.year}.</h4></a>
        <a><h4 className='parent'>Adresa:</h4> <h4 className='child'>{props.street},{props.city}</h4></a>
        <a><h4 className='parent'>Kontakt:</h4><h4 className='child'>{props.email}</h4></a>
    </Card>

 );
 }
export default OpciPodaci