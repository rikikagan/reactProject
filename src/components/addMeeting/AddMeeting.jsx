import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { observer } from "mobx-react-lite";
import Store from '../../DataStore/Store';

const Customer = observer(() => {
  const [meeting, setMeeting] = useState({
    serviceType: '',
    date: '',
    clientName: '',
    clientEmail: '',
    clientPhone: ''
  });
  
  const popAddMeeting = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Add Meeting',
      html:
        '<label for="name">Name:</label>' +
        '<input id="name" class="swal2-input">' +
        '<label for="phone">Phone:</label>' +
        '<input id="phone" class="swal2-input">' +
        '<label for="mail">Email:</label>' +
        '<input id="mail" class="swal2-input">' +'<br>'+
        '<label for="date">Date</label>' +
        '<input type="date" id="date" class="swal2-input">' +'<br>'+
        '<label for="kindMeeting">Meeting kind:</label>' +
        '<input id="kindMeeting" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        const clientName = document.getElementById('name').value;
        const clientPhone = document.getElementById('phone').value;
        const clientEmail = document.getElementById('mail').value;
        const date = document.getElementById('date').value;
        const serviceType = document.getElementById('kindMeeting').value;

        if (clientName === '' || clientPhone === '' || clientEmail === '' || date === '' || serviceType === '') {
          Swal.showValidationMessage('Please fill in all fields');
          return false;
        }

        return {
          serviceType,
          date,
          clientName,
          clientEmail,
          clientPhone
        };
      },
    });

    if (formValues) {
      Store.addMeeting(formValues);
      Swal.fire('Success', 'Meeting added successfully!', 'success');
    }
  };

  return (
    <>
      <button onClick={popAddMeeting}>Add Meeting</button>
      
    </>
  );
});

export default Customer