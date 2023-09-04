// //*Во-первых, следует отметить, что TypeScript - это строго типизированный и компилируемый язык, чем, возможно, будет ближе к программистам Java, C# и других строго типизированных языков. Хотя на выходе компилятор создает все тот же JavaScript, который затем исполняется браузером. Однако строгая типизация уменьшает количество потенциальных ошибок, которые могли бы возникнуть при разработке на JavaScript.

// //*Во-вторых, TypeScript реализует многие концепции, которые свойствены объектно-ориентированным языкам, как, например, наследование, полиморфизм, инкапсуляция и модификаторы доступа и так далее.

// //*В-третьих, потенциал TypeScript позволяет быстрее и проще писать большие сложные комплексные программы, соответственно их легче поддерживать, развивать, масштабировать и тестировать, чем на стандартном JavaScript.




// let x:number = 100; // в переменной х будет только числовое значение и тип нельзя будет менять 
// let y:string = 'qwerty';
// let isValid:boolean = true;
// // если попытаемся написать другое типовое значение? то выдаст ошибку 

// // типы данных в ts:
// let someThing: any = 'может хранить что угодно и можно перезаписывать на любой тип данных. исопльзовать лишь к крайних случаях';
// someThing = 100000;
// // если к переменным не присвоивать тип данных, то ts автоматически будет определять его как any

// interface IUser {
//     readonly id: number, // ставиться тогда когда в объекте есть данные которые меняеться лишь раз, потом не меняется. чтобы в дальнейшем уникальность id не терялся
//     name: string,
//     color?: string, // ? это свойство может быть использовано а может быть нет, это из типов инпута где поле необзательно заполнять 
//     size: {
//         width: number,
//         heigth: number,
//     }
// }
// const user: IUser = {
//     id: 123,
//     name: 'name',
//     color: '#2f4159',
//     size: {
//         width: 50,
//         heigth: 100
//     }
// }
// // ключевое слово interface название с большой буквы
// // универсиальный вариант сначала I (interface) потом навание переменных 
// // работает в объектами, массивами и классами
// // В TypeScript интерфейсы выполняют функцию именования типов, и являются мощным способом определения соглашений внутри кода, а также за пределами проекта.

// //*TypeScript позволяет создавать интерфейсы включающие в себя комбинацию других интерфейсов, что позволяет настроить очень гибкое взаимодейтсвие между интерфейсами

// interface IUserWithArea extends IUser {
//     getArea: () => number 
// }
// // наследование от одного к другому интерфейсу. добавляем лишь что будет новинькой для интерфайсу
// // extends ключевое слово для наследование

// const user2: IUserWithArea = {
//     id: 123,
//     name: 'name',
//     color: '#2f4159',
//     size: {
//         width: 50,
//         heigth: 100
//     },
//     getArea():  number {
//         return this.size.width * this.size.heigth // возвращает числовое значение 
//     }
// }

// // когда есть объект с большим количеством свойств 
// // это метод одновремнно удобный и недобный 

// interface IStyles {
//     [key:string]: string 
// } // примает только стринговое значение, это влияет на все ключи и значение

// const style: IStyles = {
//     padding: '10px 20px 10px 20px',
//     possition: 'realtive', 
// }


// // Type
// // interface IPerson {
// //     name: string,
// //     age: number,
// //     positon: Position, // добавляем в интерфейс
// // }
// // const person: IPerson = {
// //     name: 'name',
// //     age: 26,
// //     positon: 'seller',// пишем один из значений из Position 
// // }
// // // создание своего типа данные при помощи type. используется редко
// // type Position = 'manager' | 'seller'

// // Enum 
// // Тип enum или перечисление позволяет определить набор именнованных констант, которые описывают определенные состояния
// // удобен когда менятся какое либо значение из position, можно менячть лишь в одном, чтобы не искать во всем коде
// // у enum нет хойстинга

// enum Position1 {
//     Manager = 'manager',
//     Seller = 'seller',
//     Director = 'director',
// }
// interface IPerson {
//     name: string,
//     age: number,
//     position: Position1, // добавляем в интерфейс
// }

// const person: IPerson = {
//     name: 'name',
//     age: 26,
//     position: Position1.Director,// пишем один из значений из Position 
// }

// // Array - тип массив 
// // never - представляет отсуствие значения и используеться в качестве возвращаемого типа функций, которые генерируют или возращает ошибку 

// enum Position {
//     Manager = 'manager',
//     Seller = 'seller',
//     TechLead = 'techlead',
//     Director = 'director',
// }

// interface IDirector {
//     position: Position,
//     name: string,
//     salary: number,
//     product: string,
// }

// interface ISeller {
//     position: Position.Seller,
//     name: string,
//     salary: number,
//     product: string,
// }

// function employeeTypeCheck<T extends Position> (
//     position: T, employee: IDirector | ISeller
// ) {
//     if (position === Position.Director) {
//         return employee as T extends Position.Director ? IDirector : never
//     } else {
//         return employee as T extends Position.Seller ? ISeller : never
//     }
// }

// const userEnum1 = {
//     position: Position.Seller as const,
//     name: 'name1',
//     salary: 52000,
//     product: 'product: string,'
// }
// const userEnum2 = {
//     position: Position.Director as const,
//     name: 'name2',
//     salary: 50000,
//     product: 'product: string,'
// }

// const seller = employeeTypeCheck(userEnum1.position, userEnum1)
// const director = employeeTypeCheck(userEnum2.position, userEnum2)

// console.log(seller);
// console.log(director);

