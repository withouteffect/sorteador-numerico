function generateNumber(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min +1)) + min;


    if (min >= max){
        
        document.querySelector(".erro").innerHTML = "O valor mínimo tem que ser MENOR que o valor máximo. Favor atualizar a página!";
    }

    else {

        document.querySelector("#resultado-final").innerHTML = result;

    }   


}

