import { useState } from 'react'
import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
  Container,
  FormControl,
  FormLabel,
} from '@mui/material'
import Swal from 'sweetalert2';
import { Outlet, Link } from "react-router-dom"
import BusinessDetails from '../businessDetails/BusinessDetails';
import EditBusinessDetails from '../businessDetails/EditBusinessDetails';

function AdminLogin() {
  const [isLogin, setIsLogin] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({
        name, password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    // רובי בוט איך להוסיף קאץ
    if (response.ok)
      setIsLogin(true)
    else {

      Swal.fire('Error', 'Entrance for manager only!', 'error', 'Try again');
      setName("")
      setPassword("")
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>

        {!isLogin ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Admin Login
              </Typography>
              <FormControl fullWidth>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} >
              <Button variant="contained" onClick={handleLogin} margin="normal" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        ) : (
          <>
            <BusinessDetails />
            <br />
            {/* <EditBusinessDetails /> */}
            <Link to="./services">Services</Link>
            |
            <Link to="./meetings">Meetings</Link>
            <br />
            <Outlet />
          </>
        )}
      </Box>
    </Container>
  )
}

export default AdminLogin
