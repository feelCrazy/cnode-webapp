/**
 * Created by ming on 2017/2/24
 */
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentMail from 'material-ui/svg-icons/content/mail';
import Hot from 'material-ui/svg-icons/social/whatshot';
import Divider  from 'material-ui/Divider';
import Share from 'material-ui/svg-icons/social/share';
import Job from 'material-ui/svg-icons/places/business-center';

const styles = {
    avatar: {
        textAlign: 'center',
        marginTop: 10
    }
};

class DrawerLeft extends Component {


    render() {
        return (
            <div>
                <Drawer docked={false}
                        width={this.props.width}
                        open={this.props.openDrawer}
                        onRequestChange={this.props.toggleDrawer}>

                    <div style={styles.avatar}>
                        <Avatar src={'https://avatars2.githubusercontent.com/u/16098072?v=3&s=400'}
                                size={65}/>
                    </div>

                    <List>
                        <ListItem style={{borderWidth: 1, borderColor: '#eee',}}
                                  onTouchTap={this.props.toggleDrawer} primaryText="Home"
                                  leftIcon={<ActionHome/>}>
                        </ListItem>
                        <ListItem onTouchTap={this.props.toggleDrawer} primaryText="Hot"
                                  leftIcon={<Hot/>} containerElement={<Link to="hot"/>}/>
                        <ListItem onTouchTap={this.props.toggleDrawer} primaryText="Share"
                                  leftIcon={<Share/>}/>
                        <ListItem onTouchTap={this.props.toggleDrawer} primaryText="Job" leftIcon={<Job/>}/>
                        <Divider/>
                    </List>
                    <List>
                        <ListItem onTouchTap={this.props.toggleDrawer} primaryText="Message"
                                  leftIcon={<ContentMail/>}/>
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
