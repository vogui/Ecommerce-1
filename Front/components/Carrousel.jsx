import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      Image: "https://source.unsplash.com/Lq1rOaigDoY/1000x250",
    },
    {
      name: "Random Name #2",
      Image: "https://source.unsplash.com/8gBBHX_SqMo/1000x250",
    },
    {
      name: "Random Name #3",
      Image: "https://source.unsplash.com/_8KV86shhPo/1000x250",
    }
  ];

  return (
    <div id="carousel">
      <Carousel>
        {items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

function Item({ item }) {
  return (
    <Paper className="itemCarousel">
      <img src={item.Image} height="80%" width="100%" />
    </Paper>
  );
}
