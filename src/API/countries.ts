import {gql} from '@apollo/client'

export const GetAllCountries = gql`
query  {
  countries{
    name,
    code, 
    continent{
      name
    }, 
    currency, 
  }
}
`