import React, { useState } from "react";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import {
  createMuiTheme,
  ThemeOptions,
  ThemeProvider,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "100%",
      height: "100vh",
    },
  })
);

function App() {
  const classes = useStyles();
  const [isDark, setIsDark] = useState(false);
  const [themeOption, setThemeOption] = useState<ThemeOptions>({
    palette: {
      type: "light",
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(event.target.checked);
    setThemeOption((prev) => ({
      ...prev,
      palette: {
        ...prev.palette,
        type: event.target.checked ? "dark" : "light",
      },
    }));
  };

  const theme = createMuiTheme(themeOption);

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Switch
          checked={isDark}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Header>
      <Paper className={classes.paper} />
    </ThemeProvider>
  );
}

export default App;
