function IsForObject(a : any) : a is ForObject {
  return 'first' in a;
}

module.exports = IsForObject;