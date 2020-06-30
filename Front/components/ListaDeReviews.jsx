//Aca hago un pedido a /api/reviews/idPublicacion
// Y listo todas las reviews de ese producto

import React from "react";

export default ({ reviews /*usuario*/ }) => {
  return (
    <div>
      <div>
        {reviews &&
          reviews.map((review) => (
            <div key={review.id}>
              <div>
                <h5>
                  <span>{review.title}</span>
                </h5>
                <p>Valor: {review.stars}</p>
                <p>Usuario: {review.username}</p>
                <p>Comentario: {review.review}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
