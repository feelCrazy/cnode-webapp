/**
 * Created by ming on 2017/2/24
 */
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionHome from 'material-ui/svg-icons/action/home';
import Hot from 'material-ui/svg-icons/social/whatshot';
import Divider  from 'material-ui/Divider';
import Share from 'material-ui/svg-icons/social/share';
import Job from 'material-ui/svg-icons/places/business-center';
import Comment from 'material-ui/svg-icons/communication/comment';
import Message from 'material-ui/svg-icons/social/notifications';
import About from 'material-ui/svg-icons/action/info';
import FlatButton from 'material-ui/FlatButton';
import {browserHistory} from 'react-router';

const styles = {
    avatar: {
        textAlign: 'center',
        padding: 20
    },
    name: {
        width: "80%",
        display: "inline-block",
        padding: 0,
        overflow: "hidden",
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        color: '#1e49ff',
        marginTop: 5
    }
};

class DrawerLeft extends Component {

    logout = () => {
        window.localStorage.clear();
        browserHistory.push('/')
    };

    render() {
        const login = JSON.parse(window.localStorage.getItem("userAcc"));
        return (
            <div>
                <Drawer docked={false}
                        width={this.props.width}
                        open={this.props.openDrawer}
                        onRequestChange={this.props.toggleDrawer}>

                    <div style={styles.avatar}>
                        <div style={{verticalAlign: "middle"}}>
                            {login ? <div>
                                    <Avatar src={login.avatarURL}
                                            size={50} style={{marginRight: 10}}/>
                                    <span style={styles.name}>{login.loginName}</span>
                                    <div>
                                        <FlatButton label="退出" onClick={this.logout}/>
                                    </div>
                                </div> :
                                <Avatar size={50} backgroundColor={"#d8d8d8"}/>
                            }


                        </div>


                    </div>
                    <Divider/>
                    <List style={{paddingLeft: 20}}>
                        <ListItem style={{borderWidth: 1, borderColor: '#eee',}}
                                  onTouchTap={this.props.toggleDrawer}
                                  primaryText="全部"
                                  leftIcon={<ActionHome/>}
                                  containerElement={<Link to="/"/>}>
                        </ListItem>
                        <ListItem onTouchTap={this.props.toggleDrawer}
                                  primaryText="精华"
                                  leftIcon={<Hot/>}
                                  containerElement={<Link to="/good"/>}/>
                        <ListItem onTouchTap={this.props.toggleDrawer}
                                  primaryText="分享"
                                  leftIcon={<Share/>}
                                  containerElement={<Link to="/share"/>}/>
                        <ListItem onTouchTap={this.props.toggleDrawer}
                                  primaryText="问答"
                                  leftIcon={<Job/>}
                                  containerElement={<Link to="/ask"/>}/>
                        <ListItem onTouchTap={this.props.toggleDrawer}
                                  primaryText="招聘"
                                  leftIcon={<Comment/>}
                                  containerElement={<Link to="/job"/>}/>
                        <Divider/>
                        {/*</List>
                         <List>*/}
                        <ListItem onTouchTap={this.props.toggleDrawer} primaryText="消息"
                                  leftIcon={<Message/>}
                        />
                        <ListItem onTouchTap={this.props.toggleDrawer} primaryText="关于"
                                  leftIcon={<About/>}
                                  containerElement={<Link to="/about/me"/>}/>
                    </List>

                </Drawer>
            </div>
        );
    }
}

DrawerLeft.propTypes = {
    openDrawer: PropTypes.bool,
    toggleDrawer: PropTypes.func,
    width: PropTypes.number
};
DrawerLeft.defaultProps = {
    openDrawer: false,
    width: 200
};
export default DrawerLeft;
