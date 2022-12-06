// let a: number = 4;
// let b: string = 'Asadbek';
// let c: boolean = true;
// let d: string[] = ['12321', '123213', '123213']
// let e: any = 3;
//
// function test(a: string): number | string {
//     return a
// }
//
// const test2 = (a: number): string | number => {
//     return a
// }
//
// d = d.map((x: string) => x.toLowerCase());
//
// function countCoord(coord: { lat: number, long?: number }) {
//
// }
//
// function printIt(id: number | string) {
//     if (typeof id === 'number') {
//         console.log(a.toFixed(2))
//     } else if (typeof id === 'string') {
//         console.log(id.toLowerCase())
//     }
// }
//
// function getSum(a: number | number[]) {
//     if (Array.isArray(a)) {
//         a.forEach(i => i)
//     }
// }
//
// const voidFunc = (a: string): void => {
//     console.log(a)
// }
//
// const x: undefined = undefined;
// const z: null = null;

// type Point = {
//     x: number,
//     y: number
// };
//
// type D3Point = Point & {
//     z: number;
// }
//
// interface iPoint {
//     x: number,
//     y: number
// }
//
// interface i3DPoint extends iPoint {
//     z: number
// }
//
// type stringOrNumber = string | number;
//
// function print(coords: stringOrNumber | iPoint | Point) {
//     console.log(coords)
// }

// interface iTest {
//     a: number
// }
//
// interface iTest {
//     b: number
// }

// interface IPoint {
//     x: number,
//     y: number
// }
//
// interface I3DPoint extends IPoint {
//     z: number
// }
//
// const c = (point: IPoint) => {
//     const d: I3DPoint = point as I3DPoint;
// }
//
// const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;

// let c: 'test' = 'test';
//
// type actionType = 'up' | 'down';
//
// function performAction(action: actionType | ComplexAction): -1 | 1 {
//     switch (action) {
//         case "down":
//             return -1;
//         case "up":
//             return 1;
//     }
// }
//
// interface ComplexAction {
//     s: number
// }


// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
//
// enum Decision {
//     Yes = 1,
//     No = 'No'
// }
//
// function calEnum() {
//     return 2
// }
//
// function runEnum(obj: { Up: number }) {
//
// }
//
// runEnum(Direction)

// const a: [number, string, number] = [0, 'a', 1];
//
// a.push('123')
//
// console.log(a)

// function logTime<T>(num: T): T {
//     console.log(new Date())
//     return num;
// }
//
// logTime<number>(123)


























