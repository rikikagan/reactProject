import ServicesStore from "../../DataStore/ServicesStore"
import Service from "./Service"
import Swal from 'sweetalert2';
import { Button } from "@mui/material"
import { observer } from "mobx-react";
const Services=observer(()=> {
       const popAddService = async () => {
              const { value: formValues } = await Swal.fire({
                     title: 'Add Service',
                     html:
                            '<label for="serviceName">service-Name:</label>' +
                            '<input id="serviceName" class="swal2-input">' + '<br/>' +
                            '<label for="description">description:</label>' + '<br/>' +
                            '<input id="description" class="swal2-input">',
                     focusConfirm: false,
                     preConfirm: () => {
                            const serviceName = document.getElementById('serviceName').value;
                            const description = document.getElementById('description').value;

                            if (serviceName === '' || description === '') {
                                   Swal.showValidationMessage('Please fill in all fields');
                                   return false;
                            }

                            return {
                                   serviceName,
                                   description
                            };
                     },
              });

              if (formValues) {
                     ServicesStore.addService(formValues);
                     const Toast = Swal.mixin({
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 1000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                   toast.onmouseenter = Swal.stopTimer;
                                   toast.onmouseleave = Swal.resumeTimer;
                            }
                     });
                     Toast.fire({
                            icon: "success",
                            title: "Service Added successfully"
                     });
              }
       };

       return (
              <>
                     {ServicesStore.servicesList.map(
                            (_, id) => <Service key={id} id={id} />
                     )}
                     <Button onClick={popAddService}>add Service</Button>
              </>
       )
})

export default Services