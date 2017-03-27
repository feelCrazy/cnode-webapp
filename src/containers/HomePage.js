/**
 * Created by ming on 2017/2/24
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin, getArticle} from '../actions/actions';
import Header from '../components/Header';
import DrawerLeft from '../components/DrawerLeft';
import ArticleList from '../components/ArticleList';
// import CircularProgress from 'material-ui/CircularProgress';

let List = '';

const styles = {
    main: {
        paddingTop: 51,
    },
    primaryText: {
        fontWeight: "bold",
        paddingBottom: 10,
        paddingLeft: 20,
    },
    secondaryText: {
        color: "#9b9b9b",
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 14
    },
    title: {
        backgroundColor: '#f6f6f6',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
};
const tabArr = {undefined: '全部', share: '分享', job: '招聘', good: '精华', ask: '问答', about: '关于'};
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    componentDidMount() {
        const {tab} = this.props.params;
        if (tab) {
            this.props.userAction.getArticle(tab);
        } else {
            this.props.userAction.getArticle('all');
        }
        window.scrollTo(0,0)
    }

    componentDidUpdate(prevProps) {
        let oldTab = prevProps.params.tab;
        let newTab = this.props.params.tab;
        if (newTab !== oldTab) {
            if (newTab) {
                this.props.userAction.getArticle(newTab);
            } else {
                this.props.userAction.getArticle('all');
            }
        }

    }


    componentWillReceiveProps(newProps) {
        const {articleState} = newProps;
        List = <ArticleList data={articleState.topics} loadMore={this.loadMore}
                            isFetch={articleState.isFetch} page={articleState.page}/>;
    }

    loadMore = (page) => {
        this.props.userAction.getArticle('all', page);
    };

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
        const {tab} = this.props.params;
        // const info = JSON.parse(window.localStorage.getItem("userAcc"));
        return (
            <div>
                <Header click={this.handleOpen}
                        title={tabArr[tab]}
                        isLogin={userState.isLogin}
                />
                <div style={styles.main}>
                    <div >
                        {List}
                    </div>

                </div>

                <DrawerLeft toggleDrawer={this.toggleDrawer}
                            openDrawer={this.state.open}
                            width={250}
                />
            </div>
        );
    }
}

HomePage.propTypes = {
    userAction: React.PropTypes.object,
    userState: React.PropTypes.object,
    articleState: React.PropTypes.object,
    params: React.PropTypes.object,
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
