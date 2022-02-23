interface address {
  street: string,
  number: number,
  zip:string,
}
export interface User {
  name: string,
  age: number,
  country: string,
  address: address,
  admin: boolean
}
