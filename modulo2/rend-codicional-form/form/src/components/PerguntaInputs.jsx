import React from "react";

export default function PerguntaInputs(props) {
  return (
    <div>
      <p>{props.pergunta}</p>
      <input
        onChange={props.onChange}
        value={props.value}
        placeholder={"Digite aqui"}
      />
    </div>
  );
}
