import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';


function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    onSubmit: values =>{
      console.log('form:', values);
      alert("Login Successful");
    },
    validate: values=> {
      let errors ={};
     
      if(!(typeof(values.email)==="string")) errors.email ='Username should be an email';
      if(!values.email) errors.email = 'Field Required';
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div id= 'emailField'>Email</div>
        <div id= 'emailError'>
           <input name='email' type='email' onChange={formik.handleChange}
           value={formik.values.email}/>
           {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        </div>
        
        <div id='pswField'>Password</div>
        <div id= 'pswError'>
          <input name='password' type='text' onChange={formik.handleChange}
            value={formik.values.password}/>
            {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}
        </div>
        <button id= 'submitBtn' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
