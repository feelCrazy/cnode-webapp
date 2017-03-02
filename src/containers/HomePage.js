/**
 * Created by ming on 2017/2/24
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin, getArticle} from '../actions/actions';
import Header from '../components/Header';
import DrawerLeft from '../components/DrawerLeft';
import Paper from 'material-ui/Paper';
import {ListItem, List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

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
    },
    right: {
        width: "25%",
        height: 300
    },
    primaryText: {
        fontWeight: "bold",
        paddingBottom: 10
    },
    secondaryText: {
        color: "#9d9d9d",
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 14
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
        const {userState, articleState} = this.props;
        console.log(articleState);
        return (
            <div>
                <Header click={this.handleOpen}
                        title="Home"
                        isLogin={userState.isLogin}/>
                <div style={styles.main}>
                    <Paper zDepth={2} style={styles.left}>
                        <List>
                            <ListItem primaryText={<Title/>}
                                      secondaryText={<Info/>}
                                      leftAvatar={<Avatar style={{borderRadius: 5}}
                                                          backgroundColor="#ddd"/>}/>
                            <Divider inset={true}/>
                            <ListItem primaryText={<Title/>}
                                      leftAvatar={<Avatar style={{borderRadius: 5}}
                                                          backgroundColor="red"/>}/>
                            <Divider inset={true}/>
                            <ListItem
                                primaryText={<Title/>}
                                leftAvatar={<Avatar style={{borderRadius: 5}}
                                                    backgroundColor="green"/>}/>
                            <Divider inset={true}/>

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

const Title = (props) => (
    <div style={styles.primaryText}>
        <span style={{marginLeft: 20,}}>FFFFFfFF</span>
    </div>
);

const Info = () => (
    <div style={styles.secondaryText}>
        <span>100/520</span>
        <span style={{paddingLeft: 15}}>分享</span>
    </div>
);


HomePage.propTypes = {};
HomePage.defaultProps = {};
function mapStateToProps(state) {
    return {
        userState: state.userReduce,
        articleState: state.articleReduce
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators({userLogin, getArticle}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
