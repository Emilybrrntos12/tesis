

interface HomeProps {
  correoUsuario: string;
  onLogout: () => void;
}

const Home = ({ correoUsuario, onLogout }: HomeProps) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2>BIENVENIDO</h2>
          <p>Usuario: {correoUsuario}</p>
          <button className="btn btn-danger" onClick={onLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
