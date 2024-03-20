const textoEntrada = document.querySelector("#texto__entrada__input__cripto");
const textoSaida = document.querySelector("#texto__saida__cripto");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textoEntrada.value);
  textoSaida.value = textoEncriptado;
  textoEntrada.value = "";
}

function encriptar(stringEncriptada) {
  let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "obter"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < codigoMatriz.length; i++) {
    if (stringEncriptada.includes(codigoMatriz[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        codigoMatriz[i][0],
        codigoMatriz[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textoEntrada.value);
  textoSaida.value = textoDesencriptado;
  textoEntrada.value = "";
}

function desencriptar(stringDesencriptada) {
  let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "obter"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < codigoMatriz.length; i++) {
    if (stringDesencriptada.includes(codigoMatriz[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        codigoMatriz[i][1],
        codigoMatriz[i][0]
      );
    }
  }
  return stringDesencriptada;
}
