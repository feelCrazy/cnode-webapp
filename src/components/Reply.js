/**
 * Created by ming on 2017/3/22
 */

import React, {Component} from 'react';
// import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import  ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import transformDate from '../untils/transformDate';
import Divider from 'material-ui/Divider';
import NewComment from '../components/NewComment';


const styles = {
    replyNum: {
        borderWidth: 1,
        borderBottomColor: "#bfbfbf",
        borderTopColor: "#bfbfbf",
        padding: 10
    },
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        display: "flex",
    },
    replyInfo: {
        paddingLeft: 10,
        width: "100%"
    },
    replyTime: {
        display: 'inline-block',
        width: "60%",
    },
    replyThum: {
        textAlign: 'right',
        display: 'inline-block',
        width: "40%",
        verticalAlign: 'sub'
    }
};
class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSupported: [],
            supportNum: [],
        };
    }

    handleClickUps = (index, id) => {
        const login = JSON.parse(window.localStorage.getItem("userAcc"));

        let isSupported = this.state.isSupported;
        let supportNum = this.state.supportNum;
        isSupported[index] ? --supportNum[index] : ++supportNum[index];
        isSupported[index] = !isSupported[index];
        this.setState({
            isSupported,
            supportNum
        });
        this.props.action.userClcikUps(id, login.accesstoken, index);
    };
    supportState = (replies, loginId) => {
        let isSupported = replies.map(reply => {
            return reply.ups.some(up => up === loginId)
        });
        let supportNum = replies.map(reply => reply.ups.length);
        this.setState({isSupported, supportNum})
    };

    componentWillReceiveProps(newProps) {
        const {reply} =newProps;
        const login = JSON.parse(window.localStorage.getItem("userAcc"));
        if (reply.res.data.replies.length !== this.props.reply.res.data.replies) {
            this.supportState(reply.res.data.replies, login.id)
        }

    }


    render() {
        const {reply, action} = this.props;
        const login = JSON.parse(window.localStorage.getItem("userAcc"));
        // console.log(loginId.id);
        const info = reply.res.data.replies;
        return (
            <div>
                <div style={styles.replyNum}>
                    <span style={{color: "#17a3ee"}}>{info.length}</span>条回复
                </div>
                <Paper zDepth={2}>
                    {
                        reply.res.data.replies.map((item, i) => (
                            <div key={i} style={{fontSize: 12}}>
                                <Divider/>
                                <div style={styles.container}>
                                    <div>
                                        <Avatar
                                            src={item.author.avatar_url}
                                            size={35}
                                            style={{borderRadius: 5}}/>
                                    </div>
                                    <div style={styles.replyInfo}>
                                         <span style={styles.replyTime}>
                                              <span style={{paddingRight: 5}}>{item.author.loginname}</span>
                                                 <sapn>回复于:{transformDate(item.create_at)}</sapn>
                                         </span>
                                        <span style={styles.replyThum}
                                              >
                                            <ThumbUp style={{
                                                color: this.state.isSupported[i] ? 'red' : 'black',
                                                height: 18
                                            }}/>
                                            <span
                                                style={{verticalAlign: "bottom"}}>{item.ups.length}</span>
                                     </span>
                                    </div>
                                </div>
                                <div className={"reply markdown-text"}
                                     dangerouslySetInnerHTML={{__html: item.content}}
                                     style={{
                                         paddingLeft: 18, paddingRight: 18,
                                         overflow: "hidden"
                                     }}></div>
                            </div>
                        ))
                    }
                    {
                        login && <NewComment addComment={action.UserAddComment} id={reply.res.data.id}/>
                    }

                </Paper>
            </div>
        );
    }
}

Reply
    .propTypes = {
    reply: React.PropTypes.object,
    action: React.PropTypes.object
};
Reply
    .defaultProps = {};
export
default
Reply;
