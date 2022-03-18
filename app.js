function calculo(){
    var idade=prompt("digite a sua idade")

    if (idade >= 18){
        window.location.href = "https://www.instagram.com";
    } else if (idade < 18 && idade >= 15) {
        window.location.href = "https://www.google.com.br";
    } else {
        window.location.href = "https://www.jogos360.com.br";
    }
}