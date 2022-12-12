import logo from './logo.svg';
import React, { useState } from 'react';
import data from './data.json';

import './App.css';

//function get every checkbox by name and if none checked return false
function getChecked(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}



function Table() {

    
  const [contacts , setContacts] = useState(data);

  return (   
    <table className="styled-table">
    <thead>
        <tr>
            <th>fullname</th>
            <th>adress</th>
        </tr>
    </thead>
    <tbody>

    {  contacts.map( (contact) => (

            <tr key={contact.id}>
                <td>{contact.fullName}</td>
                <td>{contact.address}</td>
            </tr>

        ))
    } 

    </tbody>
    </table>
  );
}

export default Table;
