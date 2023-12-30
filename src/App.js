import './App.css';
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      {/*props가 있으므로 배경이 red*/}
      <MyStyled bgColor={"Red"}>hello React</MyStyled>
      {/*props가 없으므로 배경이 purple*/}
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
  background-color: ${(props) => (props.bgColor ? "red" : "purple")};
`;

export default App;
