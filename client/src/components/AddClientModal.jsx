// Set up AddClient react frontend for the "add client" modal and button

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

<div className="modal fade" id="addClientModal" aria-labelledby="addClientModal" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="addClientModal">Add Client</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="name" className="form-control"  id="name" value={name} onChange={ (e) => setName (e.target.value)} />

          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={email} onChange={ (e) => setEmail (e.target.value)} />

          </div>
          <button type="submit" data-bs-dismiss="modal" className="btn btn-secondary">Submit</button>
        </form>
      </div>

        </div>
    </div>
  </div>
</>
);

}

