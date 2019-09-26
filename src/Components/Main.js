import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import flower from "../img/flower.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "inline-grid",
    margin: "0 1rem",
    padding: "2rem"
  },
  Card: {
    maxWidth: 345,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 140
  }
}));

const Main = props => {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  return (
    <div
      style={{
        background: "linear-gradient(to right, #c02425, #f0cb35)"
      }}
      className={classes.root}
    >
      <Grid container spacing={2.5 * spacing}>
        {[0, 1, 2, 3, 4].map(value => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Grid key={value.id}>
              {/* i have not specified any id so it results in error of unique key. */}
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    alt="Flower"
                    image={flower}
                    title="Flower"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lorem
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Nisl nisi scelerisque eu ultrices vitae auctor eu
                      augue ut.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="secondary">
                    Share
                  </Button>
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Main;
