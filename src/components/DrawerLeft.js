/**
 * Created by ming on 2017/2/24
 */
import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class DrawerLeft extends Component {


    render() {
        return (
            <div>
                <Drawer docked={false}
                        width={200}
                        open={this.props.openDrawer}
                        onRequestChange={this.props.toggleDrawer}>

                    <div>
                        111
                    </div>

                    <Menu>
                        <MenuItem onTouchTap={this.props.toggleDrawer}>2</MenuItem>
                        <MenuItem onTouchTap={this.props.toggleDrawer}>3</MenuItem>
                        <MenuItem onTouchTap={this.props.toggleDrawer}>3</MenuItem>
                    </Menu>

                </Drawer>
            </div>
        );
    }
}

DrawerLeft.propTypes = {
    openDrawer: PropTypes.bool,
    toggleDrawer: PropTypes.func
};
DrawerLeft.defaultProps = {
    openDrawer: false
};
export default DrawerLeft;
