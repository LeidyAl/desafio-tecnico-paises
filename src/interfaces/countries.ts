export interface country{
  country:{
    name: string,
    capital: string, 
    code: string,
    currency: string, 
    continent: {
      name: string, 
    }
    phone: string, 
    languages: [{
      name: string, 
   }],
  }
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