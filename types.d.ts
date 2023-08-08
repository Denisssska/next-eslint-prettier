export interface IButton {
  text: string;
  url: string;
}
export interface Params {
  params: {
    category: 'applications' | 'illustrations' | 'websites';
  };
}
export interface Data {
  id: number;
  title: string;
  desc: string;
  image: string;
}
export interface Items {
  ['applications']: Array<Data>;
  ['illustrations']: Array<Data>;
  ['websites']: Array<Data>;
}
