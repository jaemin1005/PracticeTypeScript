type Rocket = {[property : string] : string};

const rocket: Rocket = {
  name : 'Falcon 9',
  variant: 'v1.0',
  thrust: '4,940 KN'
}

//* [property : string]: string이 인덱스 시그니처이며, 다음 세가지의 의미를 담고 있음.
//* 키의 이름 : 키의 위치만 표시하는 용도, 타입 체커해서는 사용하지 않기 때문에 무시할 수 있는 참고 정보
//* 키의 타입 : string이나 numer또는 symbol의 조합이어야 하지만, 보통은 string을 사용함
//* 값의 타입 : 어떤 것이든 될 수 있음.

//! 타입체크에서의 단점
//! 잘못된 키를 포함해 모든 키를 허용
//! 특정 키가 필요하지 않음
//! 키마다 다른 타입을 가질 수 없음
//! 타입스크립트 언어 서비스는 다음과 같은 경우에 도움이 되지 않음

//* 인덱스 시그니처는 부정확하므로, 다음과 같은 경우에는 인터페이스여야함.
interface RocketL1 {
  name : string,
  variant : string,
  thrust_kN : number;
}

const falconHeavy : RocketL1 = {
  name : "Falcon Heavy",
  variant: "v1",
  thrust_kN: 15_200
}

//! 인덱스 시그니처는 동적 데이터를 표현할 때 사용된다.
//* 예를 들어 CSV파일 처럼 행과 열에 이름이 있고, 행과 열이름에 값으로 매핑하는 객체로 나타내고 싶은 경우
function parseCSV(input : string): {[columnName: string]: string}[]{

  //* input을 행으로 나눈다.
  const lines = input.split('\n');
  //* 첫 번째 행은 header(column이름), 그 다음들은 rows로 들어간다.
  const [header, ...rows] = lines;
  //* 각 헤더 열들은 ,으로 분리한다.
  const headerColumns = header.split(',');
  
  //* 각 행 rowSr
  //* 각 행 마다 해당 열을 key로 데이터를 넣는다.
  return rows.map(rowStr => {
    const row: {[columnName : string]: string} = {};
    rowStr.split(',').forEach((cell, i) => {
      row[headerColumns[i]] = cell;
    });
    return row;
  })
}

//* 열 이름을 알고 있는 특정한 상황에서 parseCSV가 사용된다면, 미리 선언해둔 타입으로 단언문을 사용
interface ProductRow{
  productId: string;
  name: string;
  price: string;
}

declare let csvData: string;
const products = parseCSV(csvData) as unknown as ProductRow[];

//* 물론 선언해둔 열들이 런타임에 실제로 일치한다는 보장이 없음. 이 부분이 걱정된다면 값 타입에 undefined를 추가할 수 있음
function safeParseCSV(input : string): {[columnName: string]: string | undefined}[]{
  return parseCSV(input);
}

//* 모든 열에 undefined 여부를 체크해야 함.
const rows = parseCSV(csvData);
const prices: {[produt : string]: number} = {};

for(const row of rows){
  prices[row.productId] = Number(row.price);
}

//! undefined 확인
const safeRows = safeParseCSV(csvData);
for(const row of safeRows){
  if(row.productId != undefined)
    prices[row.productId] = Number(row.price);
}

//! 어떤 타입에 가능한 필드가 제한되어 있는 경우 인덱스 시그니처를 사용하면 안된다.
//* A,B,C,D 같은 키가 있지만, 얼마나 많이 있는지 모른다면, 선잭적 필드 또는 유니온 타입으로 모델링하면 된다.

interface Row1 {[column : string] : number}

interface Row2 {a: number; b?: number; c?:number; d?:number;}
type Row3 = 
        | { a : number;}
        | { a : number; b: number}
        | { a : number; b: number; c:number}
        | { a : number; b: number; c:number; d:number}

//* string 타입이 너무 광법위해서 인덱스 시그니처를 사용하는데 문제가 있을 경우,
//* string의 부분 집합을 사용할 수 있음
type Vec3D = Record<"x" | "y" | "z" | 1, number>;
// type Vec3D = {
//   x: number;
//   y: number;
//   z: number;
// }

//* 매핑된 타입을 사용하기, 매핑된 타입은 키마다 별도의 타입을 사용하게 해준다.
type Vec3DL1 = {[k in 'x' | 'y' | 'z'] : number};

// type Vec3D = {
//   x: number;
//   y: number;
//   z: number;
//}


type ABC = {[k in 'a' | 'b' | 'c']: k extends 'b' ? string : number };

// type ABC = {
//   a: number;
//   b: string;
//   c: number;
// }

