// import { createTheme } from "@mui/material/styles";
// const theme = createTheme({
//     typography: {
//       fontFamily: ['primaryfont']
//     ,fontSize:18}
//   ,
//   palette: {
//     primary: {
//       main: '#0D6F73',
//       
//     },
//     secondary: {
//       main: "#1E1E1E",
//     },
//     text: {
//       primary: "#0D6F73",
//       secondary: "#777777",
//     }
//   }
//   });
// export default theme;
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: ["primaryfont"],
    fontSize: 18,
  },
  palette: {
    primary: {
      main: "#0D6F73",
      bg:'#DCECF0'
    },
    secondary: {
      main: "#06363D",
      default: "#A0D7E2",
    },
    text: {
      primary: "#0D6F73",
      secondary: "#777777",
          dark:'#06363D',

      hover: "#EF7261",
    },
  },
});
export default theme;
