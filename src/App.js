import ParentComp from "./components/ParentComp";
// import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ThemeMode } from "./components/ThemeMode";



function App() {
  return (
    <ThemeMode>    
    <ParentComp/>
    </ThemeMode>
 );
}

export default App;
