import styled from "styled-components";

const LayoutPage = styled.div`
  border-radius: 10px;
  background-color: #919191;
  height: 300px;
  width: 350px;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red; 
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-family: sans-serif;
  border: 1px solid black;
`;

const ButtonPage = styled.div`
  margin-top: 50%;
  height: 40px;
  width: 10%;
  padding: 0px 20px;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 16px;
  background-color: orange;
  min-width: 100px;
  display: flex;
  align-items:  center;
  justify-content: center;
  font-weight: bold;
  font-family: sans-serif;
  cursor: pointer;

`;


function Layout() {
  return (
      <LayoutPage>
      <ButtonPage>Ver Viagens</ButtonPage>
      <ButtonPage>Área de Admin</ButtonPage>
    </LayoutPage>
  );
}

export default Layout;
