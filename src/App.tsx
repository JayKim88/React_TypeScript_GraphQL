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
import Products from "./pages/Products";

function App() {
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

  //스위치를 클릭할 때 event.target.checked 가 true 또는 false 가 되어
  //true 일때는 다크 false 일때는 light 테마가 적용되도록 한다.
  //event 의 타입이 무엇인지 모를때는 해당 handleChange 에 마우스를 후버하면 확인할 수 있다.
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
        {/* Switches toggle the state of a single setting on or off. */}
        <Switch
          checked={isDark}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Header>
      <Products />
    </ThemeProvider>
  );
}

export default App;
