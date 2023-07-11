import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Typography, Button, Divider, Grid } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

import { TextField, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel, MenuItem } from '@material-ui/core';


import clsx from 'clsx';


const bodyType = [
    {
        label: 'Fat',
        value: 'Fat'
    },
    {
        label: 'Skinny',
        value: 'Skinny'
    },
];

const skinTone = [
    {
        label: 'Brown',
        value: 'Brown'
    },
    {
        label: 'Wheatish',
        value: 'Wheatish'
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    }
}));

export default function Demographics(props) {
    const classes = useStyles();

    const defaultUser = {firstName: '', middleName: '', lastName: '', fatherName: '', motherName: '', mothersMaiden: ''};

    const [user, setUser] = useState(defaultUser);
    const handleChange = (event) => {
        const { id, value } = event.target;
        setUser({ ...user, [id]: value });

    }
    
    const  onFormSubmit = (event) => {
        axios.post('http://localhost:8181/api/signup/userprofiles/saveUserProfile', user)
        .then(response => 
            {
                console.log(response);
                console.log(response.json());
            }
        );
    }

     function saveUserProfile(event) {
         alert(user.firstName)
         axios.post('http://localhost:8181/api/signup/userprofiles/saveUserProfile', user)
        .then(response => 
            {
                console.log(response);
                console.log(response.json());
            }
        );
    }

    return (
        <div className={classes.root}> 
        <form className={classes.root} noValidate autoComplete="off" onSubmit = {onFormSubmit}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content" id="panel1c-header">
                        <Typography>Basic Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Grid container spacing={2}>
                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid xs={4}><TextField id="firstName"   label="First Name" variant="outlined" color="secondary" onChange={handleChange}/></Grid>
                            <Grid xs={4}><TextField id="middleName"   label="Middle Name" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid xs={4}><TextField id="lastName"   label="Last Name" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                        </React.Fragment>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid xs={4}><TextField id="fatherName"   label="Father Name" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid xs={4}><TextField id="motherName"   label="Mother Name" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid xs={4}><TextField id="mothersMaiden"   label="Mothers Maiden" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                        </React.Fragment>
                    </Grid>
                    
                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid item xs={4}><TextField id="height"   label="Height" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="weight"   label="Weight" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField
                                    id="complexion"
                                    select
                                    label="Complexion"
                                    helperText="Please select your body complexion"
                                    variant="outlined"
                                    >
                                    {bodyType.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                            </TextField></Grid>
                        </React.Fragment>
                    </Grid>

                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid item xs={4}>
                                    <FormControl component="fieldset">
                                            <RadioGroup aria-label="gender" name="gender1" onChange={handleChange} row={true}>
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />                                        
                                            </RadioGroup>
                                    </FormControl>
                                 </Grid>
                                 <Grid item xs={4}>
                                     <TextField
                                    id="bodyType"
                                    select
                                    label="Select"
                                    helperText="Please select your body type"
                                    variant="outlined"
                                    >
                                    {bodyType.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                            </TextField></Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="skinTone"
                                    select
                                    label="Select"
                                    helperText="Please select your Skin Tone"
                                    variant="outlined"
                                    >
                                    {skinTone.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                            </TextField>
                            </Grid>
                            </React.Fragment>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid item xs={4}><TextField id="userPhone"   label="Mobile" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="userEmail"   label="Email" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="userAdhaar"   label="Adhaar" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                        </React.Fragment>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid item xs={4}><TextField id="door"   label="Door #" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="street"   label="Street" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="area"   label="Area" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                        </React.Fragment>                    
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid item xs={4}><TextField id="city"   label="City" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="state"   label="State" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="country"   label="Country" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                        </React.Fragment>                    
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid item xs={4}><TextField id="postalPin"   label="Postal Pin" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="googlePin"   label="Google Pin" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                        </React.Fragment>                    
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <React.Fragment>
                            <Grid item xs={4}><TextField id="facebook"   label="Facebook" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="instagram"   label="Instagram" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                            <Grid item xs={4}><TextField id="twitter"   label="Twitter" variant="outlined" color="secondary"  onChange={handleChange}/></Grid>
                        </React.Fragment>                    
                    </Grid>
                </Grid>
                </AccordionDetails>
                <Divider/>
                <AccordionActions>
                    <Button size='small' type='submit' value = 'Save' onSubmit={onFormSubmit}>Save</Button>
                    <Button size='small' value = 'Cancel'>Cancel</Button>
                </AccordionActions>
            </Accordion>
            <Divider/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content" id="panel1c-header">
                        <Typography>Qualification</Typography>
                </AccordionSummary>
                <AccordionDetails><Typography size='h1'></Typography></AccordionDetails>
                <Divider/>
                <AccordionActions>
                    <Button size='small' value = 'Cancel'>Cancel</Button>
                </AccordionActions>
            </Accordion>
            <Divider/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content" id="panel1c-header">
                        <Typography>Profession</Typography>
                </AccordionSummary>
                <AccordionDetails><Typography size='h1'></Typography></AccordionDetails>
                <Divider/>
                <AccordionActions>
                    <Button size='small' value = 'Cancel'>Cancel</Button>
                </AccordionActions>
            </Accordion>
            <Divider/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content" id="panel1c-header">
                        <Typography>Life Style</Typography>
                </AccordionSummary>
                <AccordionDetails><Typography size='h1'></Typography></AccordionDetails>
                <Divider/>
                <AccordionActions>
                    <Button size='small' value = 'Cancel'>Cancel</Button>
                </AccordionActions>
            </Accordion>
            <Divider/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content" id="panel1c-header">
                        <Typography>About me!</Typography>
                </AccordionSummary>
                <AccordionDetails><Typography size='h1'></Typography></AccordionDetails>
                <Divider/>
                <AccordionActions>
                    <Button size='small' value = 'Cancel'>Cancel</Button>
                </AccordionActions>
            </Accordion>
            <Divider/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content" id="panel1c-header">
                        <Typography>What i am looking for !</Typography>
                </AccordionSummary>
                <AccordionDetails><Typography size='h1'></Typography></AccordionDetails>
                <Divider/>
                <AccordionActions>
                    <Button size='small' value = 'Cancel'>Cancel</Button>
                </AccordionActions>
            </Accordion>
            <Divider/>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content" id="panel1c-header">
                        <Typography>My Social Media !</Typography>
                </AccordionSummary>
                <AccordionDetails><Typography size='h1'></Typography></AccordionDetails>
                <Divider/>
                <AccordionActions>
                    <Button size='small' value = 'Cancel'>Cancel</Button>
                </AccordionActions>
            </Accordion>
        </form>
        </div>
    );
}