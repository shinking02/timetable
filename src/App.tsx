import { BrowserRouter } from 'react-router-dom';
import styled from "styled-components";
import AnimatedRoutes from './components/AnimatedRoutes';

const Main = styled.div`
  background-color: rgb(190, 205, 214);
  min-height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Main>
      <BrowserRouter>
          <AnimatedRoutes />
      </BrowserRouter>
    </Main>
  );
}

export default App;
