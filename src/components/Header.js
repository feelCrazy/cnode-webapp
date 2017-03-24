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
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
// import New from 'material-ui/svg-icons/maps/near-me';


const styles = {
    loginBtn: {
        color: '#fff',
    },
    title: {
        fontSize: 18,
        textAlign: 'center'
    },
    header: {
        position: "fixed",
        zIndex: 10,
        top: 0,
        left: 0,
        width: "100%",
        boxShadow: " 0 0 4px rgba(0,0,0,.25)"
    }
};

class Header extends Component {


    handleClick = () => {
        this.props.click();
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
        const {title, goBack} = this.props;
        return (
            <div style={styles.header}>
                <AppBar title={title}
                        iconElementLeft={goBack ?
                            <IconButton><NavigationBack/></IconButton> :
                            <IconButton> <NavigationMenu/></IconButton>}
                        onLeftIconButtonTouchTap={this.handleClick}
                        titleStyle={styles.title}
                        iconElementRight={userAcc !== null ?
                            <FlatButton label="新建" onTouchTap={() => browserHistory.push("/new/topics")}/> :
                            <FlatButton label="登录" onClick={this.login}/>}/>
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
            <MenuItem primaryText="退出" onClick={props.logout}/>
        </IconMenu>
    </div>
);


Header.propTypes = {
    click: React.PropTypes.func,
    title: React.PropTypes.string.isRequired,
    goBack: React.PropTypes.bool
};
Header.defaultProps = {
    goBack: false,
};
Logged.propTypes = {
    logout: React.PropTypes.func
};

export default Header;
