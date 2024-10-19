// selection1.merge(selection2)

let allCsvg1 = d3.selectAll('#svg1 circle');
console.log(allCsvg1);

let allCsvg2 = d3.selectAll('#svg2 circle');
console.log(allCsvg2);

let allCsvg1Odd = allCsvg1.select(function (d,i,n) {
  // console.log(d);
  // console.log(i);
  // console.log(n);
  // console.log(n[i]);
  // console.log(this);
  if(i%2==0){
    this.style.fill = "indianred";
    return this;
  } else {
    return null;
  }
});
console.log(allCsvg1Odd);

let allCsvg1Even = allCsvg1.select(function (d,i,n) {
  // console.log(d);
  // console.log(i);
  // console.log(n);
  // console.log(n[i]);
  // console.log(this);
  if(i%2==0){
    return null;
  } else {
    this.style.fill = "pink";
    return this;
  }
});
console.log(allCsvg1Even);

let allCSvg1OddEven = allCsvg1Odd.merge(allCsvg1Even);
console.log(allCSvg1OddEven);

let allCSvg = allCsvg1.merge(allCsvg2);
console.log(allCSvg);

let allCsvg2Odd = allCsvg2.select(function (d,i,n) {
  // console.log(d);
  // console.log(i);
  // console.log(n);
  // console.log(n[i]);
  // console.log(this);
  if(i%2==0){
    this.style.fill = "blue";
    return this;
  } else {
    return null;
  }
});
console.log(allCsvg2Odd);

let allCsvg2Even = allCsvg2.select(function (d,i,n) {
  // console.log(d);
  // console.log(i);
  // console.log(n);
  // console.log(n[i]);
  // console.log(this);
  if(i%2==0){
    return null;
  } else {
    this.style.fill = "green";
    return this;
  }
});
console.log(allCsvg2Even);

let svg1Msvg2 = allCsvg1Even.merge(allCsvg2Odd);
console.log(svg1Msvg2);

let svg2Msvg1 = allCsvg2Even.merge(allCsvg1Odd);
console.log(svg2Msvg1);