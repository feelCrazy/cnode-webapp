/**
 * Created by ming on 2017/3/7
 */
import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import '../assets/App.css'

const style = {
    container: {
        // paddingLeft: 25,
        // paddingRight: 25,
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    mainLeft: {
        width: '60%',
        borderRadius: 3
    },
    mainRight: {
        width: '20%',
        borderRadius: 3
    },
    title: {
        paddingLeft: 15,
        borderBottom: 1,
        borderBottomColor: "#d6d6d6",
        borderBottomStyle: 'solid',
    },
    titleName: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20
    },
    secondTitle: {
        paddingTop: 10,
        paddingBottom: 45,
        color: "#8d8d8d",
        fontSize: 14,
        paddingLeft: 20
    },
    li: {
        float: "left",
        marginLeft: 25
    },
    info: {
        backgroundColor: "#e9e9e9",
        padding: 10
    },
    userAvatar: {
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        display: "inline-block",
        verticalAlign: "middle"
    }
};

const tab = {all: '全部', share: '分享', job: '招聘', good: '精华', ask: '问答'};
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {data} = this.props;
        return (
            <div>
                <div style={style.container}>
                    <Paper zDepth={2} style={style.mainLeft}>
                        <div style={style.title}>
                            <div style={style.titleName}>{data.data.title}</div>
                            <div style={style.secondTitle}>
                                <ul>
                                    <li style={{float: "left"}}><span>发布于：11xX</span></li>
                                    <li style={style.li}>
                                        <span>作者：{data.data.author.loginname}</span></li>
                                    <li style={style.li}>
                                        <span>来自：{tab[data.data.tab]}</span></li>
                                </ul>

                            </div>
                            <button>收藏</button>
                        </div>
                        <div className='main' dangerouslySetInnerHTML={{__html: data.data.content}}/>
                    </Paper>
                    <Paper style={style.mainRight}>
                        <div>
                            <div style={style.info}>作者</div>
                            <Avatar src={data.data.author.avatar_url} size={50}
                                    style={style.userAvatar}/>
                            <span >{data.data.author.loginname}</span>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    data: PropTypes.object.isRequired
};
Article.defaultProps = {};
export default Article;
