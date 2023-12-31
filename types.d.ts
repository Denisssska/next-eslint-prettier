export interface IMeta {
  title: string;
  description?: string;
}
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
export interface IPost {
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}
export interface IUser {
  _id: string;
  name: string;
  email: string;
  image: string;
}
export interface IdParams {
  params: {
    id: string;
  };
}
export interface ClientOnlyProps {
  children: React.ReactNode;
}
