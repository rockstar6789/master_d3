//selection.attr(name,value)

let svg1 = d3.select("svg");
console.log(svg1);

let svg1width = svg1.attr("width");
console.log(svg1width);
let svg1height = svg1.attr("height");
console.log(svg1height);
let svg1class = svg1.attr("class");
console.log(svg1class);

svg1.attr("class", "svg1");

svg1.selectChildren().attr("class", "myCircle");

svg1.selectChildren().attr("class", "newCircle");

svg1.selectChildren().attr("class", "myCircle");

let svg2 = d3.select("svg:nth-of-type(2)");
console.log(svg2);
let svg2Circles = svg2.selectAll("circle");
console.log(svg2Circles);
svg2Circles.attr("style", "fill: peachpuff");
svg2Circles.attr("style", function (d,i,n) {
  // console.log(d);
  // console.log(i);
  // console.log(n);
  return `fill:rgb(${Math.random() * (250+i)}, ${Math.random() * (250+i)}, ${Math.random() * (250+i)})`;
});