/* eslint-disable @typescript-eslint/no-unused-vars */

//importar los modulos de firebase
import appFirebase from './firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase);

import Login from './components/Login';
import Home from './components/Home';
import { useState } from 'react';

const App = () => {

    const [usuario, setUsuario] = useState<any>(null);

    onAuthStateChanged(auth, (usurioFire) => {
        if(usurioFire){
            setUsuario(usurioFire)
        }else{
            setUsuario(null)
        }
    })
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUsuario(null);
    });
  };

  return (
    <div>
      {usuario ? <Home correoUsuario={usuario.email} onLogout={handleLogout} /> : <Login />}
    </div>
  )
}

export default App
