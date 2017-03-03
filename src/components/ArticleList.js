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

const styles = {
    primaryText: {
        fontWeight: "bold",
        paddingBottom: 15,
        paddingLeft: 10,
        verticalAlign: "middle"
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
    }

};

const tab = {all: '全部', share: '分享', job: '招聘', good: '精华', ask: '问答'};

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {isFetch, data} = this.props;
        console.log(data);
        return (
            <div>
                <Paper zDepth={2}>
                    {
                        isFetch ? <div style={{textAlign: 'center'}}><CircularProgress size={60}/></div> :
                            <List style={{height: '100%'}}>
                                {data.map((item, i) => (
                                    <Link key={i} to={'/hot'} style={{textDecorationLine: 'none'}}>
                                        <ListItem primaryText={<Title title={item}/>}
                                                  secondaryText={<Info info={item}/>}
                                                  leftAvatar={<Avatar style={styles.avatar}
                                                                      src={item.author.avatar_url}/>}/>
                                        <Divider inset={true}/>
                                    </Link>
                                ))}
                            </List>
                    }
                </Paper>
            </div>
        );
    }
}

const Title = (props) => (
    <div style={styles.primaryText}>
        {props.title.top && <span style={{color: 'red', paddingRight: 10}}>顶</span>}
        {props.title.good && <span style={{color: 'red', paddingRight: 10}}>精</span>}
        <span style={styles.title}>{props.title.title}</span>
    </div>
);

const Info = (props) => (
    <div style={styles.secondaryText}>
        <span style={{paddingRight: 10}}>
            {props.info.reply_count}/{props.info.visit_count}
        </span>
        <span>{tab[props.info.tab]}</span>
    </div>
);

ArticleList.propTypes = {
    data: PropTypes.array.isRequired,
    isFetch: PropTypes.bool.isRequired,
};
ArticleList.defaultProps = {};
export default ArticleList;
