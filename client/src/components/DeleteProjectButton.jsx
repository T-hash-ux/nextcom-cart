import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_PROJECT } from '../mutations/ProjectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';

export default function DeletProjectButton({ projectId }) {

    const navigate = useNavigate();
// Use the useNavigate hook from react-router-dom to handle navigation

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },

        // When the deletion is completed, navigate to the home page

        onCompleted: () => navigate('/'),

                // Refetch the GET_PROJECTS query after deletion to update the project list

        refetchQueries: [{ query: GET_PROJECTS }],
    });


    return <div className='d-flex mt-5 ms-auto'>
        <button className="btn btn-danger m-2" onClick={deleteProject}>
            <FaTrash className='icon' /> Delete Project
        </button>
    </div>;
        
}