/**
 * Created by ming on 2017/2/24
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import  DrawerLeft from '../components/DrawerLeft';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    toggleDrawer = () => {
        this.setState({
            open: !this.state.open,
        });
    };
    handleOpen = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    render() {
        return (
            <div>
                <Header clickOpen={this.handleOpen}/>

                <DrawerLeft toggleDrawer={this.toggleDrawer}
                            openDrawer={this.state.open}/>
            </div>
        );
    }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};
export default HomePage;
