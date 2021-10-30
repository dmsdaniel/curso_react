import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/themas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyled } from "./Components/GlobalStyled";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true)

  const toggleTema = (tema) => {
    setTema( (tema) => !tema )

  }
  return (
   
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyled />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
      </ThemeProvider>

  )
}

export default App;
