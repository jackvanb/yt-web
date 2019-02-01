import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import QuizIcon from '@material-ui/icons/Assignment';

const styles = {
    card: {
        maxWidth: 345,
        justifyContent: 'center'
    },
    media: {
        height: 140
    },
    icon: {
        fontSize: 128
    },
    content: {
        textAlign: 'center'
    }
};

function QuizCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
            Take the Quiz
                    </Typography>
                    <IconButton>
                        <QuizIcon className={classes.icon} />
                    </IconButton>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

QuizCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuizCard);
