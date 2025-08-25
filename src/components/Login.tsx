
import ImagenProfile from '../assets/bota.jpg';
import Imagen from '../assets/user.png';

import { useState } from 'react';
import appFirebase from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);


const Login = () => {

    const [registrar, setRegistrar] = useState(false);

    const funtAutentication = async(e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const contra = e.target.contra.value;

        if(registrar){
            //registrar
            try {
                const user = await createUserWithEmailAndPassword(auth, email, contra);
                console.log(user);
            } catch (error) {
                console.log(error);
            }
        }else{
            //iniciar sesion
            try {
                const user = await signInWithEmailAndPassword(auth, email, contra);
                console.log(user);
            } catch (error) {
                console.log(error);
            }
        }
    }

  return (
    <div className="login-container">
      <div className="container">
        <div className="login-row row">
          <div className="col-md-4">
            <div className="login-form">
              <form onSubmit={funtAutentication}>
                <img src={Imagen} alt="" className='imagen-login' />
                <div className="mb-3">
                  <label className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" placeholder="Ingrese su correo" id='email'/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input type="password" className="form-control" placeholder="Ingrese su contraseña" id='contra'/>
                </div>
                <div className="text-center mt-3">
                  <button type="submit" className="btn btn-primary">{registrar ? "Registrate" : "Iniciar sesion"}</button>
                </div>
              </form>
                 <div className="text-center mt-3">
                    <h4>{registrar ? "Cuenta" : "No tienes Cuenta"}</h4>
                  <button onClick={()=> setRegistrar(!registrar)} type="submit" className="btn btn-primary">{registrar ? "Iniciar sesion" : "Registrate"}</button>
                </div>
            </div>
          </div>
          <div className="col-md-8 text-center">
            <img src={ImagenProfile} alt="Login" className="login-image"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
