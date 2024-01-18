import { Box, Container } from "@mui/material";
import "./App.css";
import ButtonAdd from "./components/ButtonAdd";
import BasicTable from "./components/Table/BasicTable";
import BingMap from "./components/map/BingMap";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "start",
          }}
        >
          {" "}
          <h3
            style={{
              marginRight: "20px",
            }}
          >
            Shops Management
          </h3>
          <ButtonAdd />
        </Box>{" "}
        <Box
          sx={{
            mb: "30px",
          }}
        >
          <BingMap height={300} />
        </Box>
        <BasicTable />
      </Container>
    </div>
  );
}

export default App;
