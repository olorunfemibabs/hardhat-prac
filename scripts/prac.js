function user(floor) {

    let x = floor >= 1 && floor < 5 ? "Web3Bridge" : floor >=5 && floor <9 ? "Nigeria" : floor >=9 && floor < 13 ? "Smart Contract" : "Blockchain";

    return x;
}
console.log(floor(25));