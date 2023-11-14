//router
import AppRouter from "./AppRouter";
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
};

export default App;
