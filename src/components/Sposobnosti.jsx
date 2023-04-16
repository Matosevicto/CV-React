
import Card from 'react-bootstrap/Card'
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'


function Sposobnosti(){
 
    
    const percentage1 = 75
    const percentage2 = 80
    const percentage3 = 60
    
  

    return(
        <Card style={{ backgroundColor:'#2b6777' ,padding:'0px 0px 50px'}}>
        <h2 className='naslov'>Sposobnosti</h2>
        <hr />
       <h4 className='sposobnost'>Web development </h4>
       <ProgressBar id="bar" variant="secondary" style={{height: '50px' }}  now={percentage1} label={`${percentage1}%`} />

       <h4 className='sposobnost'>MS Office</h4>
       <ProgressBar id="bar" variant="secondary" style={{height: '50px'}} now={percentage2} label={`${percentage2}%`}   />
       <h4 className='sposobnost'>Objektno orjentirano programiranje</h4>
       <ProgressBar id="bar" variant="secondary" style={{height: '50px'}} now={percentage3} label={`${percentage3}%`} />
        </Card>
    )
}
export default Sposobnosti

