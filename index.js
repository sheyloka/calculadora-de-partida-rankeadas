calcularNivel(50, 2);

function calcularNivel(vitorias, derrotas) {

    const saldoTotal = vitorias - derrotas;

    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log(`O Herói tem um saldo de ${saldoTotal} e está no nível de ${nivel}`);
}