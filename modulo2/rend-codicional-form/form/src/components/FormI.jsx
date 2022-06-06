import PerguntaInputs from "./PerguntaInputs";
import PerguntaInputsII from "./PerguntaInputsII";

export const FormI = () => {
  return (
    <div>
      <h3>ETAPA 1: Dados Gerais</h3>
      <PerguntaInputs pergunta={"1 - Qual seu nome?"} />
      <PerguntaInputs pergunta={"1 - Qual a sua idade?"} />
      <PerguntaInputs pergunta={"1 - Qual é o seu e-mail?"} />
      <PerguntaInputsII
        pergunta={"4. Qual a sua escolaridade?"}
        opcoes={[
          "Ensino médio incompleto",
          "Ensino médio cursando",
          "Ensino médio completo",
          "Ensino superior incompleto",
          "Ensino superior cursando",
          "Ensino superior completo",
        ]}
      />
    </div>
  );
};
