let num: number = 10;
let str: string = "Hello";
let boolean: boolean = true;

//========================================================================

function calculateArea(r: number): number {
  return Math.PI * r * r;
}

console.log(calculateArea(10));


function calculateDensity(m: number, v: number): number {
  return m / v;
}

console.log(calculateDensity(10, 5)); 

//========================================================================

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

const products: IProduct[] = [
  {
    id: 1,
    title: "product1",
    description: "description1",
    price: 10,
    colors: ["red", "blue", "green"],
  },
  {
    id: 2,
    title: "product2",
    description: "description2",
    price: 20,
    colors: ["yellow", "orange", "purple"],
  },
];

console.log(products);

