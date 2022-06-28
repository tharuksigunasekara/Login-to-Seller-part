import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../component/styles/Home.css' ;
//import '../component/styles/Signtype.css';
import { blue, yellow } from '@material-ui/core/colors';
function SignupType(){
return(
    <div className >
    
    <div class="split left" >
      <div className='descri'>
  <h1 style={{font:"icon", fontSize:"30px", fontWeight:1000, marginLeft:-100,marginTop:-120}}>Are you a seller or customer? <br/><br/> Choose your role here & <br/><br/>  Proceed with your interests</h1>

    </div>  
    </div>
    <div class="split right"> 
    <div className='second'>
    <Button component={Link} to="/SignupSeller" variant="outlined" style={{ height: "45%", width: "45%", 
        padding: "10px 10px", color:"black",border: '2px solid',
        fontSize: "18px"}} >
  Seller
</Button>
<br/>
<br/>
    <Button component={Link} to="/SignupCustomer" variant="outlined"   style={{ height: "45%", width: "45%", 
        padding: "10px 10px", color:"black",border: '2px solid',
        fontSize: "18px"}}>
 Customer
</Button>
</div>
</div>
</div>



);
}
export default SignupType;