import Grid from '@material-ui/core/Grid';
import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


// Icons
import EditIcon from '@material-ui/icons/Edit';

function Spike() {

    return (
        <>
        <Grid container>
            <Grid item>
            <Paper>Back to the home page</Paper>
            </Grid>
            <Grid item>
            <Paper>Mental Health Emergency Links</Paper>
            </Grid>
            <Grid item>
            <Paper>Provider Contact Info</Paper>
            </Grid>
        </Grid>
        </>
    )
}