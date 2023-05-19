import { gql } from '@apollo/client';

// This Mutation is set up the Add a project along with the project information
const ADD_PROJECT = gql`
    mutation AddProject($name: 
        String!
        $description: String!
        $status: ProjectStatus!
        $clientId: ID!
    ) {
        addProject(
            name: $name
            description: $description
            status: $status
            clientId: $clientId
        ) {
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }

`;
// This Mutation is set up the Delete a project by selecting the project Id
const DELETE_PROJECT = gql`
    mutation DeleteProject($id: ID!) {
        deleteProject(id: $id) {
            id
        }
    }

`;
//  This Mutation is Designed to update a project as well as the data
const UPDATE_PROJECT = gql`
    mutation UpdateProject(
        $id: ID!
        $name: String!
        $description: String!
        $status: ProjectStatusUpdate!
    ) {
        updateProject(
            id: $id
            name: $name
            description: $description
            status: $status
        ) {
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`;


export {ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };

