/**
 * Created by ming on 2017/3/22
 */

import React, {Component, PropTypes} from 'react';
// import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import  ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import transformDate from '../untils/transformDate';
import Divider from 'material-ui/Divider';

const styles = {
    replyNum: {
        borderWidth: 1,
        borderBottomColor: "#bfbfbf",
        borderTopColor: "#bfbfbf",
        padding: 10
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
        this.props.action(id, login.accesstoken, index);
    };
    supportState = (replies, loginId) => {
        let isSupported = replies.map(reply => {
            return reply.ups.some(up => up === loginId)
        });
        let supportNum = replies.map(reply => reply.ups.length);
        console.log(supportNum);
        this.setState({isSupported, supportNum})
    };

    componentWillReceiveProps(newProps) {
        const {reply} =newProps;
        const login = JSON.parse(window.localStorage.getItem("userAcc"));
        if (reply.replies.length !== this.props.reply.replies) {
            this.supportState(reply.replies, login.id)
        }
    }

    render() {
        const {reply} = this.props;
        const loginId = JSON.parse(window.localStorage.getItem("userAcc"));
        // console.log(loginId.id);
        // console.log(this.props);
        const info = reply.replies;
        return (
            <div>
                <div style={styles.replyNum}>
                    <span style={{color: "#17a3ee"}}>{info.length}</span>条回复
                </div>
                <Paper zDepth={2}>
                    {
                        reply.replies.map((item, i) => (
                            <div key={i} style={{fontSize: 12}}>
                                <div style={{
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    paddingTop: 15,
                                    display: "flex",
                                }}>
                                    <div style={{}}>
                                        <Avatar
                                            src={item.author.avatar_url}
                                            size={35}
                                            style={{borderRadius: 5}}/>
                                    </div>
                                    <div style={{paddingLeft: 10, width: "100%"}}>
                                         <span style={{display: 'inline-block', width: "60%"}}>
                                              <span style={{paddingRight: 5}}>{item.author.loginname}</span>
                                                 <sapn>回复于:{transformDate(item.create_at)}分钟前</sapn>
                                         </span>
                                        <span style={{
                                            textAlign: 'right',
                                            display: 'inline-block',
                                            width: "40%",
                                            verticalAlign: 'sub'
                                        }}
                                              onClick={this.handleClickUps.bind(this, i, item.id)}>
                                            <ThumbUp style={{
                                                color: this.state.isSupported[i] ? 'red' : 'black',
                                                height: 18
                                            }}/>
                                            <span
                                                style={{verticalAlign: "bottom"}}>{this.state.supportNum[i]}</span>
                                     </span>
                                    </div>
                                </div>
                                <div className="markdown-text"
                                     dangerouslySetInnerHTML={{__html: item.content}}
                                     style={{paddingLeft: 18, paddingRight: 18}}></div>

                                <Divider/>
                            </div>
                        ))
                    }


                </Paper>
            </div>
        );
    }
}

Reply.propTypes = {};
Reply.defaultProps = {};
export default Reply;
