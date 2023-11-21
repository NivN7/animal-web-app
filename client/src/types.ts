export interface ThemeContextInterface {
  darkTheme: boolean;
  toggleTheme(): void;
}

export type SVGProps = {
  color?: string;
  width?: string;
  height?: string;
};

export interface IListing {
  name: string;
  description: string;
  address: string;
  species: string;
  age: string;
  breed: string;
  color: string;
  contactNumber: number;
  gender: string;
  vaccination: string;
  imageUrls: Array<string>;
  userRef: string;
}
