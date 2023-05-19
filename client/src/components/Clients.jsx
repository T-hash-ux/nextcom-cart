import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import Spinner from './Spinner';
import { GET_CLIENTS } from '../queries/clientQueries';



export default function Clients() {
    // Use the useQuery hook to fetch the clients data
    const { loading, error, data } = useQuery(GET_CLIENTS);
// If the data is still loading, render a Spinner component

    if (loading) return <Spinner />;
  // If there's an error while fetching the data, render an error message
  
    if (error) return <p>Something Went Wrong</p>;

    return (
         <>
        
        {!loading && !error && (
            <table className='table table-hover mt-3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.clients.map(client => (
                        <ClientRow key={client.id} client={client} />
    
                    ))}
                </tbody>
            </table>
        )}

        </>
        
    );
}