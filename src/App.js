import ParentComp from "./components/ParentComp";
import { AuthProvider } from "./context/authContext";
// import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ThemeMode } from "./context/ThemeMode";



function App() {
  return (
    <ThemeMode>
      <AuthProvider>
        <ParentComp />
      </AuthProvider>
    </ThemeMode>
  );
}

export default App;
