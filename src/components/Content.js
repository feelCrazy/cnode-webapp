/**
 * Created by ming on 2017/3/7
 */
import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import '../assets/App.css';
import '../assets/github-markdown.css';
import Avatar from "material-ui/Avatar";
import transformDate from "../untils/transformDate";

const style = {
    container: {
        // paddingLeft: 25,
        // paddingRight: 25,
        paddingTop: 15,
    },
    title: {
        paddingLeft: 15,
        borderBottom: 1,
        borderBottomColor: "#d6d6d6",
        borderBottomStyle: 'solid',
    },
    titleName: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    secondTitle: {
        paddingTop: 15,
        paddingBottom: 45,
        color: "#8d8d8d",
        fontSize: 14,
        // paddingLeft: 20
    },
    top: {
        marginTop: 5
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
        const info = data.data;
        return (
            <div>
                <div>
                    <Paper zDepth={2}>
                        <div style={style.title}>
                            <div style={style.titleName}>{data.data.title}</div>
                            <div style={style.secondTitle}>
                                <div>
                                    <div style={{float: "left"}}>
                                        <Avatar size={35} src={info.author.avatar_url}/>
                                    </div>
                                    <div style={{float: "left", fontSize: 12, paddingLeft: 10}}>
                                        <div style={style.li}>
                                            <span>作者：{info.author.loginname}</span></div>
                                        <div style={style.top}>
                                            <span>来自：{tab[info.tab]}</span></div>
                                    </div>
                                    <div style={{float: "right", fontSize: 12, paddingRight: 15}}>
                                        <div>
                                            <span>发布于：{transformDate(info.create_at)}</span></div>

                                        <div style={style.top}>
                                            <span>{info.visit_count}次浏览</span></div>
                                    </div>


                                </div>

                            </div>
                        </div>
                        {/*<div className='main' dangerouslySetInnerHTML={{__html: data.data.content}}/>*/}
                        <div >
                            <div className={"main markdown-body"}
                                 dangerouslySetInnerHTML={{__html: data.data.content}}/>
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
