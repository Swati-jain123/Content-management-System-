import validator from 'validator';
import React,{ useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";



function Login(){
    const history=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const validateEmail=(e)=>{
        var email1=e.target.value;
        if(validator.isEmail(email1)){
         setEmail(email1);
      
        }
        else{
         setEmail("enter valid email");
        }
    };

 
    async function submit(e){
        e.preventDefault();
        try{
         await axios.post("http://localhost:8000/register",{
         email,password
        })
        .then(res=>{
            if(res.data==="exist"){
           alert("Registration Successful")
           history("/login",{state:{id:email}});

            }
            else if(res.data==="not exist"){
                history("/home",{state:{id:email}})
            }
        })
        .catch(e=>{
            alert("Wrong details")
            console.log(e)
        })
    
    }
        catch(e){
         console.log(e);
        }
    }

return(
    <div className="login">
        <h1 className='heading'>Register</h1>
        <form action="POST">
            <input type="name" placeholder='Name'/>
         <input type="email" onChange={(e)=>validateEmail(e)}  placeholder="Email"  /><span  style={{fontWeight:'bold', color:'red'}}>{email}</span>
           
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
            
            <input type="submit" className='button1' onClick={submit}/>

        </form>

        
        <p>Already have an account  <Link to="/login" className='here'> Login  </Link> </p>
    </div>
)
}
export default Login