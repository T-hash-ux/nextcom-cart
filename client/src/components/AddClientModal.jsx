// This section is importing the `useState` hook from React
import { useState } from "react"
// Importing the `FaUser` icon from the `react-icons/fa` package
import {FaUser} from 'react-icons/fa';
 // Importing the `useMutation` hook from Apollo Client
import { useMutation } from "@apollo/client";

export default function AddClientModal() {
    return (
        <>
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target='#addClientModal'>
    <div className="d-flex align-items-center">
        <FaUser className='icon' />
    <div>Add Client</div>
    </div>      
    </button>

<div className="modal fade" id="addClientModal" tabindex="-1" aria-labelledby="addClientModal" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="addClientModal">Add Client</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>
    </div>
  </div>
</div>


        </>
    )

}

