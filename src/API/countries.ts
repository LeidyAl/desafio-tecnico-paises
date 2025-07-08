import {gql} from '@apollo/client'

export const GetAllCountries = gql`
query  {
  countries{
    name,
    code, 
    continent{
      name, 
      code
    }, 
    currency, 
  }
}
`

export const GetCountry = gql`
query GetCountry ($code: ID!){
  country(code:$code) {
		name,
    capital, 
    code,
    languages{
    	 name, 
    },
    continent{
      name
    }, 
    currency, 
    phone
  }
}
`

export const GetContinents = gql`
query{
  continents{
    name,
    code
  }
}
`