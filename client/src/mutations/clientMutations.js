import { gql } from '@apollo/client';
// / GraphQL mutation to add a client
const ADD_CLIENT = gql`
mutation addClient($name: String!, $email: String!, 
    $phone: String!) {
        addClient(name: $name, email: $email, phone: $phone) 
        {
            id
            name
            email
            phone
        }
    }
`;
// GraphQL mutation to delete a client
const DELETE_CLIENT = gql`
mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
        id
        name
        email
        phone
    }
}
`;

export { ADD_CLIENT, DELETE_CLIENT };