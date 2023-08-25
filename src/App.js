import React, { useEffect } from "react";
import Curso from "./Curso";

function App() {

  const [curso, setCurso] = React.useState()
  const [carregando, setCarregando] = React.useState(null)

  async function buscar_curso(event){
      setCarregando(true)
      const required = await fetch(`http://localhost:3003/${event.target.id}`)
      const respose = await required.json()
      setCurso(respose)
      setCarregando(false)
  }


  return (
    <>
        <button onClick={buscar_curso} id="programacao">Programação</button>
        <button onClick={buscar_curso} id="data">Data Science</button>

        {curso && !carregando && <Curso dados={curso}/>}

        {carregando && <p>Carregando...</p>}
    </>

  );
}

export default App;