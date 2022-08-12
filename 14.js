// object destructuring9

const band = {
    bandname : "coldplay",
    famousalbum : "losing",
    year: 2003,
    famoussong : "kashmir"
};

// const var1 = band.bandname;
// const var2 = band.famousalbum;

// console.log(var1,var2);

// const {bandname, famousalbum} = band;
// console.log(bandname);
//  restProps mai koi vhi bachi huee value store ho jayegi
let {bandname , famousalbum,...restProps} = band;

console.log(band)
console.log(restProps);

