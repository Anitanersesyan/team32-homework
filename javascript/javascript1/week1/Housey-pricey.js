
/* We have made our own formula for calculating the price of a house. This formula is VERY simplified and not at all close to the real calculation which can get quite complicated:
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.
Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above. */


let peterHouse = 8 * 10 * 10 * 2.5 * 1000 + 100 * 300;
let juliaHouse = 5 * 11 * 8 * 2.5 * 1000 + 70 * 300;
let peterHousePrice = 2500000;
let juliaHousePrice = 1000000;


if (peterHouse > peterHousePrice) {
    console.log("Peter is paying too little");
} else {
    console.log("Peter is paying too much");
}

if (juliaHouse > juliaHousePrice) {
    console.log("Julia is paying too little");
} else {
    console.log("Julia is paying too much");
}
