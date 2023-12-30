import './App.css';
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <MyStyled>hello React</MyStyled>
    </div>
  );
}

const MyStyled = styled.div`
  width: 50vw;
  min-height: 150px;
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  &:hover {
    background-color: #ddd;
  }
  background-color: yellow;
`;

export default App;
