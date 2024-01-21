calcularNivel(50, 2);

function calcularNivel(vitorias, derrotas) {

    const saldoTotal = vitorias - derrotas;

    let nivel;

    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    console.log(`O Herói tem um saldo de ${saldoTotal} e está no nível de ${nivel}`);
}