export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: object;
  };
  region: string;
  flag: string;
  favorite: boolean;
};

export type CountryDetails = {
  name: {
    common: string;
    official: string;
  };
  flag: string;
  capital: string[];
  region: string;
  population: number;
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  borders: string[];
};
