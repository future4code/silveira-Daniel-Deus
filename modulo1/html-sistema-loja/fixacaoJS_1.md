
```javascript 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salarioFuncionario = 2000;
  let porcentagemComissaoFuncionario = 0.05 * 100;
  let comissaoFuncionario = 100 * qtdeCarrosVendidos + valorTotalVendas * 0.05;
  return salarioFuncionario + comissaoFuncionario;
}
```
