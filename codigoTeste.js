const clss = document.querySelector("#classificao")
const form = document.querySelector("#form")
const imcResult = document.querySelector("#imc-rst")
const alturaInput=document.querySelector("#altura")
const pesoInput=document.querySelector("#peso")
const calculo=document.querySelector("#Calculo")



function calculaIMC(){

    if(alturaInput.value <= 0 || pesoInput.value <= 0){
        alert("Verifique se tudo foi preenchido corretamente!")
    }else{
const resultado = pesoInput.value / (alturaInput.value * alturaInput.value);
        
        const numeroFormado = resultado.toFixed(1)

        imcResult.textContent = numeroFormado
        // crase = ` código `
        //child = filho
        //sibling = irmão
        //parent = pai

        if (numeroFormado < 18.5) {
            clss.textContent = 'Você está abaixo do peso ideal';
          } else if (numeroFormado < 24.9) {
            clss.textContent = 'Você está no peso ideal';
          } else if (numeroFormado < 30) {
            clss.textContent = 'Você está com excesso de peso';
          } else if (numeroFormado >= 30) {
            clss.textContent = 'Você está Obeso(a)';
          } else {
            clss.textContent = 'Você está com obesidade extrema';
          }

        
        return numeroFormado; 

        
    };

    
}

