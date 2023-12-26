import { observer } from "mobx-react";
import BusinessDataStore from "../../DataStore/BusinessDataStore";
import EditBusinessDetails from "./EditBusinessDetails";
import { Button, Card, Grid, Typography } from '@mui/material';
import { useState } from "react";
const BusinessDetails = observer(() => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };
    return (
        <>
            {isEditing ? (
            <EditBusinessDetails onSave={handleEdit} />
            ) : (
                <Card sx={{ padding: "1rem", marginBottom: "1rem" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                               name: {BusinessDataStore.businessData.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                Address: {BusinessDataStore.businessData.address}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                Phone: {BusinessDataStore.businessData.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                Owner: {BusinessDataStore.businessData.owner}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                         logo:   <img src={BusinessDataStore.businessData.logo} alt="Logo" style={{ width: "100%" }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                               description: {BusinessDataStore.businessData.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button variant="contained" onClick={handleEdit}>
                        Edit
                    </Button>
                </Card>
            )
            }
        </>
    )
}
)

export default BusinessDetails