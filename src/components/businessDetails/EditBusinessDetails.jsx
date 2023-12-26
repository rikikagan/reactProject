import { Button, Card, TextField, Grid, Typography } from '@mui/material';
import BusinessDataStore from '../../DataStore/BusinessDataStore';
import { observer } from 'mobx-react';
import { useState } from 'react';
import BusinessDetails from './BusinessDetails';
const EditBusinessDetails = observer(() => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
    const formData = document.getElementById('editForm');
    const businessData = {
      name: formData.get('name'),
      address: formData.get('address'),
      phone: formData.get('phone'),
      owner: formData.get('owner'),
      logo: formData.get('logo'),
      description: formData.get('description'),
    };
    BusinessDataStore.updateData(businessData);
  };
  const handleSave = () => {
    setIsEditing(false);
};
  return (
    <>
      {isEditing ? (
        <BusinessDetails onSave={handleSave} />
      ) : (
        <Card sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" gutterBottom>
            Edit Business Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                // value={BusinessDataStore.businessData.name}
                id="editName"
                //onChange={(e) => BusinessDataStore.businessData.name = e.target.value}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                id="editAddress"
                //onChange={(e) => BusinessDataStore.businessData.address = e.target.value}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="phone"
                id="editPhone"
                //onChange={(e) => BusinessDataStore.businessData.phone = e.target.value}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="owner"
                id="editowner"
                //onChange={(e) => BusinessDataStore.businessData.owner = e.target.value}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="logo"
                id="editLogo"
                //onChange={(e) => BusinessDataStore.businessData.logo = e.target.value}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="description"
                id="editdescription"
                //onChange={(e) => BusinessDataStore.businessData.description = e.target.value}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleEdit}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Card>
      )
}
</>
      );
});
export default EditBusinessDetails;