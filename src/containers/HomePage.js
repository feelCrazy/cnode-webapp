/**
 * Created by ming on 2017/2/24
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '../actions/actions';
import Header from '../components/Header';
import DrawerLeft from '../components/DrawerLeft';
import Paper from 'material-ui/Paper';
import {ListItem, List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = {
    main: {
        height: 500,
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    left: {
        width: "70%",
        height: 200,
    },
    right: {
        width: "25%",
        height: 100
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
                <div style={styles.main}>
                    <Paper zDepth={2} style={styles.left}>
                        <List>
                            <ListItem primaryText={<TitleInfo/>}
                                      leftAvatar={<Avatar style={{borderRadius: 5}}
                                                          backgroundColor="#ddd"/>}/>
                            <ListItem primaryText={<TitleInfo/>}
                                      leftAvatar={<Avatar style={{borderRadius: 5}}
                                                          backgroundColor="red"/>}/>
                            <ListItem
                                primaryText={<TitleInfo/>}
                                leftAvatar={<Avatar style={{borderRadius: 5}}
                                                    backgroundColor="green"/>}/>

                        </List>
                    </Paper>
                    <Paper zDepth={2} style={styles.right}/>

                </div>

                <DrawerLeft toggleDrawer={this.toggleDrawer}
                            openDrawer={this.state.open}
                            width={300}
                />
            </div>
        );
    }
}

const TitleInfo = (props) => (
    <div>
        <span>DDD</span>
        <span style={{marginLeft: 20,}}>FFFFFfFF</span>
    </div>
);


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
