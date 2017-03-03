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
import ArticleList from '../components/ArticleList';

let List = '';

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
        paddingBottom: 10,
        paddingLeft: 20,
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

    componentDidMount() {
        this.props.userAction.getArticle('all');
    }

    componentWillReceiveProps(newProps) {
        const {articleState} = newProps;
        List = <ArticleList data={articleState.topics} isFetch={articleState.isFetch}/>;
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
                    <div style={styles.left}>
                        {List}
                    </div>

                    <Paper zDepth={2}
                           style={styles.right}/>
                </div>

                <DrawerLeft toggleDrawer={this.toggleDrawer}
                            openDrawer={this.state.open}
                            width={300}
                />
            </div>
        );
    }
}

HomePage.propTypes = {
    userAction: React.PropTypes.object,
    userState: React.PropTypes.object,
    articleState: React.PropTypes.object
};
HomePage.defaultProps = {};
function mapStateToProps(state) {
    return {
        userState: state.userReduce,
        articleState: state.articleReduce,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators({userLogin, getArticle}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
