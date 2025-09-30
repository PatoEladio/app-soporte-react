import { Container, Heading } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';

import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Toaster />
      {/* BARRA DE TITULO */}
      <Container py={5} fluid background={"#001361"} color={"white"}>
        <Heading textAlign={"center"} fontWeight={"600"} fontSize={"2xl"}>Gestor de permisos administrativos</Heading>
      </Container>

      {/* SECCION PRINCIPAL */}
      <Container my={6} maxW={"4xl"}>
        <Landing />
      </Container>
    </>
  );
}

export default App
