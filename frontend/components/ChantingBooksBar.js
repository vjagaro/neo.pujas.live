import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ChantingBookButton from "@/components/ChantingBookButton";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1.2em",
    [theme.breakpoints.up("sm")]: {
      height: "3.5em",
      fontSize: "1.5em",
    },
  },
  bookContainer: {
    marginTop: "-1.5em",
    [theme.breakpoints.up("sm")]: {
      marginTop: "-2.2em",
    },
    display: "flex",
    justifyContent: "flex-end",
  },
  book: {
    "&:last-child": {
      marginLeft: ".5em",
      marginRight: "-.5em",
    },
  },
}));

const ChantingBooksBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Box className={classes.bookContainer}>
        <ChantingBookButton
          book="1"
          className={classes.book}
          direction="left"
        />
        <ChantingBookButton
          book="2"
          className={classes.book}
          direction="left"
        />
      </Box>
    </Container>
  );
};

export default ChantingBooksBar;
