import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(7),
    },
  })
);

const products = [...Array(10)].map(() => ({
  name: "우유",
  price: 1000,
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8hKFHL0VwIR8L5_cV2QgTWd-30cCoxjtRw&usqp=CAU",
}));

export default function Products() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container justify="center" spacing={2}>
        {products.map(({ name, price, imgUrl }) => (
          <Grid item xs={6} md={4}>
            <Paper style={{ height: 200 }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={imgUrl}
                alt="product_thumbnail_image"
              />
              {name}
              {price}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
