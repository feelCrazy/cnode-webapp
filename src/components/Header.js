/**
 * Created by ming on 2017/2/24
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    loginBtn: {
        color: '#fff',
    }
};

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.clickOpen();
    };

    render() {
        return (
            <div>
                <AppBar title="Home"
                        onLeftIconButtonTouchTap={this.handleClick}
                        titleStyle={styles.title}
                        iconElementRight={<Login/>}
                >
                </AppBar>
            </div>
        );
    }
}

const Login = () => (
    <div style={{marginTop:'5px'}}>
        <FlatButton style={styles.loginBtn} label="Login"/>
        <FlatButton style={styles.loginBtn} label="Login"/>
        <FlatButton style={styles.loginBtn} label="Login"/>
        <FlatButton style={styles.loginBtn} label="Login"/>
        <FlatButton style={styles.loginBtn} label="Login"/>
    </div>
);


Header.propTypes = {
    clickOpen: React.PropTypes.func
};
Header.defaultProps = {};
export default Header;
