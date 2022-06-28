import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../component/styles/Home.css' ;

function SigninType(){
return(
    <div  >
   
    <div className="split left" >
    <div className='descri'>
    <h1 style={{font:"icon", fontSize:"30px", fontWeight:1000, marginLeft:-100,marginTop:-120}}>Are you a seller or customer?</h1>
<h2 style={{font:"icon", fontSize:"30px", fontWeight:1000, marginLeft:-100,}}>Choose your role here & <br/><br/> Sign in...</h2>

    </div>  
    </div>  
    <div className="split right" > 
    <div className='second'>
    <Button component={Link} to="/SigninSeller" variant="outlined" style={{ height: "45%", width: "45%", 
        padding: "10px 10px", color:"black",border: '2px solid',
        fontSize: "18px"}} >
 Seller
</Button>
<br/>
<br/>
    <Button component={Link} to="/SigninCustomer" variant="outlined" style={{ height: "45%", width: "45%", 
        padding: "10px 10px", color:"black",border: '2px solid',
        fontSize: "18px"}}>
 Customer
</Button>

</div>
</div>
</div>



);
}
export default SigninType;