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

function LoginPage() {
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
                            image={require('../images/login.png')}
                            title="Login Screen"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align="center">Login</Typography>
                            <form>
                                <TextField 
                                    required 
                                    id="username" 
                                    label="Username" 
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
                            <Button variant="contained" color="primary" fullWidth >Sign in</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
      </Fragment>
  );
}

export default LoginPage;
