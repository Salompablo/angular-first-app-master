export interface UserModel {
  name: string;
  age: number;
  gender?: 'male' | 'female' | 'non-binary';
}

export interface ImgModel {
  src: string;
  alt: string;
}
