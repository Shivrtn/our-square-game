function Login(){
    return(
<div style={{backgroundColor:'yellow'}}>
    <form >
        email:<input placeholder="enter registered email" type="email"></input><br/>
        password:<input placeholder="enter your password" type='password'></input><br/>
        <input style={{color:'white',backgroundColor:"blue",marginLeft:"50px",marginTop:'5px'}} type="submit"></input>
    </form>
    <a href="">create new account</a>
</div>
    )
}


export default Login;