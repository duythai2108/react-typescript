export interface Product {
  name: string;
  brand: string;
  color: string;
}
// not good
// export interface Product {
//   speed?: string;
// }

// good
export interface ProductNewFeature {
  spped?: "100km/h";
}
export interface ICard {
  title: string;
  description?: string;
  image: string;
  link: string;
}
// assesstions &
export type FinalProduct = Product & ProductNewFeature;
