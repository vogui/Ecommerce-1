//Aca hago un pedido a /api/reviews/idPublicacion
// Y listo todas las reviews de ese producto

import React from "react";
import Rating from "@material-ui/lab/Rating";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
export default ({ reviews /*usuario*/ }) => {
  return (
    <div>
      <div>
        <List>
          {reviews &&
            reviews.map((review) => (
              <ListItem key={review.id} className="reviewItem">
                <ListItemText
                  primary={review.username}
                  secondary={review.review}
                />
                <Rating name="disabled" value={review.stars} disabled />
              </ListItem>
            ))}
        </List>
      </div>
    </div>
  );
};
