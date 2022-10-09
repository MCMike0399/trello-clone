import { Grid } from "@mui/material";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <Grid
      sx={{
        background: "linear-gradient(#b5ced7, #e6fcff)",
        height: "100vh",
        width: "100%",
      }}
    >
      <TopBar header="Trello Demo" />
    </Grid>
  );
}

export default App;
