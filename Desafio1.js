//variaveis

let nivelJogador = 1000
let nickJogador = ("Jack o arqueiro")
let ranking = 0

//laço
if (nivelJogador <= 1000){
    ranking = "Ferro"
}else if(nivelJogador <= 2000){
    ranking = "bronze"
}else if(nivelJogador <= 5000){
    ranking = "Prata"
}else if(nivelJogador <= 7000){
    ranking = "Ouro"
}else if(nivelJogador <= 8000){
    ranking = "Platina"
}else if(nivelJogador <= 9000){
    ranking = "Ascendente"
}else if(nivelJogador <= 10000){
    ranking = "Imortal"
}else if(nivelJogador >= 10001){
    ranking = "Radiante"
}


//print na tela
console.log("O Herói de nome *" + nickJogador + "* está no nível de *" + ranking + "*")
