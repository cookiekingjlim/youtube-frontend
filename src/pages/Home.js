import styled from "styled-components";

// 말 그대로 css 설정할 수 있게...
const Test = styled.div`
  background-color: aqua;
  color: white;
`;

const StyledMain = styled.main`
    padding-top: 56px;
    display: flex;
`;


const Home = () => {
  return (
    <StyledMain>
      <h1>Home</h1>
      <Test>TEST~~</Test>
    </StyledMain>
  )
}
export default Home;