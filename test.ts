type Currency = {
  unit : "EUR" | "GBP" | "JPY" | "USD"
  value : number
}

let Currency = {
  DEFAULT : "USD",
  from(value:number, unit = Currency.DEFAULT): Currency{
    return {unit, value};
  }
}

let amountDue : Currency = {
  unit: 'JPY',
  value: 83733.10
}

let otherAmountDue = Currency.from(330, 'EUR');

function call(f: (...args: any[]) => unknown, ...argrs: unknown[]) : unknown
{
  return f(...argrs);
}

function fill(length: number, value:string): string[]
{
  return Array.from({length}, () => value);
}

call(fill,10,'a');

function tuple<T extends unknown[]>(...ts : T) : T
{
    return ts;
}

