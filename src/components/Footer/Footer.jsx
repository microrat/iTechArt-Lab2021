import {
  Box,
  Container,
  Grid,
} from "@material-ui/core";
import React from "react";


class Footer extends React.Component {
  render() {
    return (
      <Box bgcolor="text.primary" mt={15}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} >
              <Box borderBottom={1} sx={{fontWeight: 'bold'}} >Company</Box>
              <Box  color="error.main" mt={2}>About PizzaLab 2021</Box>
              <Box  color="error.main">Partners</Box>
              <Box  color="error.main">Careers</Box>
              <Box  color="error.main">Contact</Box>
            </Grid>

            <Grid item xs={12} sm={4} >
              <Box borderBottom={1} sx={{fontWeight: 'bold'}} >Suport</Box>
              <Box  color="error.main" mt={2}>Popular Help Topics</Box>
              <Box  color="error.main">Policies</Box>
              <Box  color="error.main">Download Protection</Box>
            </Grid>

            <Grid item xs={12} sm={4} >
              <Box borderBottom={1} sx={{fontWeight: 'bold'}} >Store</Box>
              <Box  color="error.main" mt={2}>Featured</Box>
              <Box  color="error.main">OfficeSuite</Box>
              <Box  color="error.main">Productivity</Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={1} pb={5}>
            iTechArt 2021 ReactJS Lab
          </Box>
          
        </Container>
      </Box>
    );
  }
}

export default Footer;
