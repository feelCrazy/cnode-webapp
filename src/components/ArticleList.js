/**
 * Created by ming on 2017/3/2
 */
import React, {Component, PropTypes} from 'react';
import {ListItem, List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';
import InfiniteLoader from 'react-infinite-loader';

let page = 1;
const styles = {
    primaryText: {
        fontWeight: "bold",
        paddingBottom: 15,
        paddingLeft: 10,
        verticalAlign: "middle",
    },
    secondaryText: {
        color: "#9d9d9d",
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 10
    },
    avatar: {
        borderRadius: 5,
        backgroundColor: "#ddd"
    },
    title: {
        display: "inline-block",
        padding: 0,
        width: "80%",
        overflow: "hidden",
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    textTop: {
        color: 'red',
        paddingRight: 10
    }

};

const tab = {all: '全部', share: '分享', job: '招聘', good: '精华', ask: '问答'};

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        };
    }

    componentDidMount() {
        /*function throttle(fn, delay, mustRunDelay) {
         var timer = null;
         var t_start;
         return function () {
         var context = this, args = arguments, t_curr = +new Date();
         clearTimeout(timer);
         if (!t_start) {
         t_start = t_curr;
         }
         if (t_curr - t_start >= mustRunDelay) {
         fn.apply(context, args);
         t_start = t_curr;
         }
         else {
         timer = setTimeout(function () {
         fn.apply(context, args);
         }, delay);
         }
         };
         }

         window.addEventListener('scroll', () => throttle(this.loadMore(), 500, 1000), false);*/

        /*
         * 加载更多
         * */

    }


    loadMore = () => {
        console.log("---");
        page++;
        this.props.loadMore(page)


    }


    render() {
        const {isFetch, data, page} = this.props;
        console.log(page);
        let list = [];
        list.push(
            data.map((item, i) => (
                <Link key={i} to={'/Article/' + item.id}
                      style={{textDecorationLine: 'none', textDecoration: 'none'}}>
                    <ListItem primaryText={<Title title={item}/>}
                              secondaryText={<Info info={item}/>}
                              leftAvatar={<Avatar style={styles.avatar}
                                                  src={item.author.avatar_url}/>}/>
                    <Divider inset={true}/>
                </Link>
            ))
        );
        return (
            <div>
                <Paper zDepth={2}>
                    {
                        (isFetch && page === 0) ?
                            <div style={{textAlign: 'center', paddingTop: 50}}><CircularProgress size={50}/>
                            </div> :
                            <List style={{
                                position: 'relative'
                            }}>
                                {data.map((item, i) => (
                                    <Link key={i} to={'/Article/' + item.id}
                                          style={{textDecorationLine: 'none', textDecoration: 'none'}}>
                                        <ListItem primaryText={<Title title={item}/>}
                                                  secondaryText={<Info info={item}/>}
                                                  leftAvatar={<Avatar style={styles.avatar}
                                                                      src={item.author.avatar_url}/>}/>
                                        <Divider inset={true}/>
                                    </Link>
                                ))}
                                <InfiniteLoader
                                    visitStyle={{
                                        position: 'absolute',
                                        width: '100%',
                                        bottom: 10,
                                        height: 10
                                    }}
                                    onVisited={this.loadMore}/>

                                {
                                    (isFetch && page > 1) &&
                                    <ListItem primaryText="加载中..." style={{textAlign: "center"}}/>
                                }
                            </List>
                    }
                </Paper>
            </div>
        );
    }
}

const Title = (props) => (
    <div style={styles.primaryText}>
        {props.title.top && <span style={styles.textTop}>顶</span>}
        {props.title.good && <span style={styles.textTop}>精</span>}
        <span style={styles.title}>{props.title.title}</span>
    </div>
);
Title.propTypes = {
    title: PropTypes.object
};

const Info = (props) => (
    <div style={styles.secondaryText}>
        <span style={{paddingRight: 10}}>
            {props.info.reply_count}/{props.info.visit_count}
        </span>
        <span>{tab[props.info.tab]}</span>
    </div>
);
Info.propTypes = {
    info: PropTypes.object
};

ArticleList.propTypes = {
    data: PropTypes.array.isRequired,
    isFetch: PropTypes.bool.isRequired,
    loadMore: PropTypes.func
};
ArticleList.defaultProps = {};
export default ArticleList;
