import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router';
import { auth } from '../../Firebase/firebase.init';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';



const Register = () => {
    const {createUser} = use(AuthContext);

  const handleRegister =(event)=>{

    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email,password)
    .then(result=>{
      console.log(result.user);
    })
    .catch(error =>{
      console.log(error);
    })
   
  }
    // const handleRegsiter = (e)=>{
    //     e.preventDefault();
    //     const email =e.target.email.value;
    //     const password =e.target.password.value;
    //     console.log(email,password);

    //     createUserWithEmailAndPassword(auth , email, password )
    //     .then(result =>{
    //         console.log(result)
    //     })
    //     .catch(error => {console.log(error)})

    // }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Regsiter</button>
        </fieldset>
        </form>
        <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;