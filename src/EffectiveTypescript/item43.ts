//* Any
(document as any).monkey = "Tamarin";

//* 보강을 사용한 방법.
interface Document {
  monkey: string;
}

document.monkey = "Tamarin";

//* 모듈의 관점에서 사용할 경우 global선언을 추가해야한다.
export{}
declare global {
  interface Document {
    monkey: string;
  }
}
document.monkey = "Tamarin";

//* 타입 단언문
interface MonkeyDocument extends Document {
  monkey: string;
}

(document as MonkeyDocument).monkey = "Mascaque";