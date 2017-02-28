/**
 * Created by ming on 2017/2/24
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {browserHistory} from 'react-router';

const styles = {
    loginBtn: {
        color: '#fff',
    }
};

class Header extends Component {


    clickOpen = () => {
        this.props.clickOpen();
    };

    login = () => {
        browserHistory.push('/login')
    };
    logout = () => {
        window.localStorage.clear();
        browserHistory.push('/')
    };

    render() {
        const userAcc = window.localStorage.getItem('userAcc');
        return (
            <div>
                <AppBar title="Home"
                        onLeftIconButtonTouchTap={this.clickOpen}
                        titleStyle={styles.title}
                        iconElementRight={userAcc !== null ?
                            <Logged logout={this.logout}/> : <FlatButton label="LOGIN" onClick={this.login}/>}
                >
                </AppBar>
            </div>
        );
    }
}

const Logged = (props) => (
    <div style={{marginTop: '5px'}}>
        <IconMenu iconButtonElement={<IconButton iconStyle={styles.loginBtn}><MoreVertIcon/></IconButton>}
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}>

            <MenuItem primaryText="Refresh"/>
            <MenuItem primaryText="Send feedback"/>
            <MenuItem primaryText="Settings"/>
            <MenuItem primaryText="Help"/>
            <MenuItem primaryText="Sign out" onClick={props.logout}/>
        </IconMenu>
    </div>
);


Header.propTypes = {
    clickOpen: React.PropTypes.func
};
Header.defaultProps = {};
export default Header;
