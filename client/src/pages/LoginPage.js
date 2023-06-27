import React,{ useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function Login(){
    const history=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    async function submit(e){
        e.preventDefault();
        try{
         await axios.post("http://localhost:8000/login",{
         email,password
        })
        .then(res=>{
            if(res.data==="exist"){
            history("/create",{state:{id:email}});
            }
            else if(res.data==="notexist"){
                alert("user have not register");
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
        <h1 className="heading">Login</h1>
        <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
            <input type="submit" className="button1" onClick={submit}/>

        </form>

        <br/>
        <p>Don't have an account <Link to="/register" className="here"> Register</Link></p>
        <br/>
        
    </div>
)
}
export default Login