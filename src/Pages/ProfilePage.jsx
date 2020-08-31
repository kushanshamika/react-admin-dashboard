import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function RegisterPage() {
    const classes = useStyles();
  return (
        <Fragment>
            <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ minHeight: '80vh' }}
            >
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardMedia 
                            className={classes.media}
                            image={require('../images/profileBG.jpg')}
                            title="Profile Background"
                        >
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align="center">Kushan Shamika</Typography>
                            <form>
                                <TextField 
                                    required 
                                    id="email" 
                                    label="Email" 
                                    fullWidth 
                                />
                                <TextField 
                                    required 
                                    id="password"
                                    style={{ marginTop: 10 }}
                                    label="Password" 
                                    fullWidth 
                                />
                            </form>
                        </CardContent>
                        <CardActions >
                            <Button variant="contained" color="primary" fullWidth >Sign up</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
      </Fragment>
  );
}

export default RegisterPage;
