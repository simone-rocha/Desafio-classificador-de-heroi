let nome = "Desbravador";
let XP = 8000; 
let nivel = "1000";

switch(true) {
    case XP < 1000:
        nivel = "Ferro";
        break;
    case XP >= 1001 && XP <= 2000:
        nivel = "Bronze";
        break;
    case XP >= 2001 && XP <= 5000:
        nivel = "Prata";
        break;
    case XP >= 5001 && XP <= 7000:
        nivel = "Ouro";
        break;
    case XP >= 7001 && XP <= 8000:
        nivel = "Platina";
        break;
    case XP >= 8001 && XP <= 9000:
        nivel = "Ascendente";
        break;
    case XP >= 9001 && XP <= 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}

console.log("O Herói de nome " + (nome) + " está no nível de " + (nivel));

