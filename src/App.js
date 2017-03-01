import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './assets/App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme'


const muTheme = getMuiTheme({
    appBar: {
        height: 50,
        color: '#212121',
    },
    drawer: {},
    badge:{
        color:'#fff',
        textColor:'#fff'
    }

});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muTheme}>
                <div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
