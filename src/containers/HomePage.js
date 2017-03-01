/**
 * Created by ming on 2017/2/24
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '../actions/actions';
import Header from '../components/Header';
import  DrawerLeft from '../components/DrawerLeft';

const styles = {
    div: {
        height: 500,
        backgroundColor: "#54cedd"
    }
};

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
        const {userState} = this.props;
        return (
            <div>
                <Header click={this.handleOpen}
                        title="Home"
                        isLogin={userState.isLogin}/>
                <div style={styles.div}>

                </div>

                <DrawerLeft toggleDrawer={this.toggleDrawer}
                            openDrawer={this.state.open}/>
            </div>
        );
    }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};
function mapStateToProps(state) {
    return {
        userState: state.userReduce
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userLogin, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
