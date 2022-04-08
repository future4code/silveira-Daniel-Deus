import React from "react";
import "./index.css";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #009dff;
  height: 100vh;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const WhatsLab = styled.h1`
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  font-size: 30px;
  color: #fff;
`;

const InfoWhats = styled.p`
  text-align: center;
  color: #fff;
  margin: 0;
`

const MessagesContainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  color: #fff;
  font-size: 16px;
`;

const InputsContainer = styled.div`
  display: flex;
`;

const NameInput = styled.input`
  width: 120px;
  outline: none;
  border: 1px solid #878787;
  padding: 15px 7px;
  margin: 5px;
  border-radius: 5px;
`;

const MessageInput = styled.input`
  flex-grow: 1;
  outline: none;
  border: 1px solid #878787;
  margin: 5px;
  border-radius: 5px;
`;

const ButtonMessage = styled.button`
  color: black;
  padding: 0px 15px;
  border: 1px solid #878787;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

class App extends React.Component {
  state = {
    messages: [],
    userValue: "",
    messageValue: "",
  };

  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value });
  };

  onChangeMessageValue = (event) => {
    this.setState({ messageValue: event.target.value });
  };

  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue,
    };
    console.log(newMessage);
    const newMessagesArray = [newMessage, ...this.state.messages];

    this.setState({ messages: newMessagesArray, messageValue: "" });
  };

  render() {
    return (
      <AppContainer>
        <WhatsLab>WhatsLab</WhatsLab>
        <InfoWhats>O chat para LabDev's</InfoWhats>
        <MessagesContainer>
          {this.state.messages.map((message, index) => {
            return (
              <p key={index}>
                <strong>{message.user}</strong>: {message.text}
              </p>
            );
          })}
        </MessagesContainer>
        <InputsContainer>
          <NameInput
            onChange={this.onChangeUserValue}
            value={this.state.userValue}
            placeholder={"Nome de usuário"}
          />
          <MessageInput
            onChange={this.onChangeMessageValue}
            value={this.state.messageValue}
            placeholder={"Sua mensagem"}
          />
          <ButtonMessage onClick={this.sendMessage}>Enviar</ButtonMessage>
        </InputsContainer>
      </AppContainer>
    );
  }
}

export default App;
