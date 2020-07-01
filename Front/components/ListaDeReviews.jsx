//Aca hago un pedido a /api/reviews/idPublicacion
// Y listo todas las reviews de ese producto

import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel({reviews}) {
  const classes = useStyles();

  return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Reviews</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
      <div>
        {reviews &&
          reviews.map((review) => (
            <div key={review.id}>
              <div>
                <p>
                  {review.title}
                <br></br>
                Valor: {review.stars}
                <br></br>
                Usuario: {review.username}
                <br></br>
                Comentario: {review.review}</p>
              </div>
            </div>
          ))}
      </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>)

};
