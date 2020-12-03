//persona estandar
export interface Person{
  id: number;
  name: string;
  age: number;
  civil: string;
  adress: string;
  status: string;
  phone: string;
  celphone: string;
}
//objetos en ventas
export interface Item{
  tipo: string;
  status: string;
  marca: string;
  modelo: string;
  age: string;
  motor: string;
  chasis: string;
  placa: string;
  color: string;
  puertas: number;
  apertura: string;
  capacidad: string;
}
//profecional
export interface Porfetional{
  id: number;
  name: string;
  matricula: number;
}