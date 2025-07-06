export interface country{
  name: string,
  capital: string, 
  code: string,
  continent:  string, 
  currency: string, 
  phone: string
}

export interface AllCountries{
  countries: [
    {
      name: string;
      code: string;
      continent:{
        name: string;
      } 
      currency: string;
    }
  ]
}