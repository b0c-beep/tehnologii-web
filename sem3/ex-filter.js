let birth_years = [1980, 1990, 1997, 2000, 2001, 2005, 2007, 2010, 2015, 2020];

const checkAdult = (year) => new Date().getFullYear() - year >= 18;

const adults = birth_years.filter(checkAdult);

console.log("All birth years: " + birth_years); // [1980, 1990, 1997, 2000, 2001, 2005, 2007, 2010, 2015, 2020]
console.log("Adult birth years: " + adults); // [1980, 1990, 2000]