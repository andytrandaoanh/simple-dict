import {createMuiTheme} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';


export default createMuiTheme({
  palette: {
    primary: teal,
    secondary: green,
    error: { main: red[600] }
  }
});