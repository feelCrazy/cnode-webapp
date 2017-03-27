/**
 * Created by ming on 2017/3/24
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userAddArticle} from '../actions/actions';

const styles = {
    button: {
        backgroundColor: '#646464',
        color: "#fff",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5, marginLeft: 5
    },
    select: {
        display: "inline-block",
        width: "50%",
        minWidth: "40%",
        fontSize: 16,
    },
    title: {
        border: 'none',
        width: "100%",
        fontSize: 16
    },
    errTitle: {
        borderColor: 'red',
        borderWidth: 1,
        width: "100%",
        fontSize: 16
    },
    topics: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 20
    },
    errContent: {
        borderColor: 'red',
        borderWidth: 1,
        width: "90%",
        padding: 10
    },
    content: {
        width: "90%",
        padding: 10
    }
};
class NewTopics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTitle: true,
            isContent: true,
        };
    }

    componentWillReceiveProps(newProps) {
        const {newTopics} = newProps;
        if (newTopics.success) {
            browserHistory.push('/')
        }
    }

    handleClick = () => {
        browserHistory.goBack();
    };

    handleAdd = () => {
        const title = this.textAdd.value;
        const content = this.textArea.value;
        const s = this.dd.value;
        const info = JSON.parse(window.localStorage.getItem("userAcc"));
        if (title.trim() === "" || title.trim().length < 10) {
            this.textAdd.focus();
            this.setState({
                isTitle: false,
            });
        } else if (content.trim() === "") {
            this.textArea.focus();
            this.setState({
                isContent: false,
            });
        } else {
            this.props.newTopicAction(info.accesstoken, title.trim(), content.trim());
        }
    };

    render() {
        return (
            <div >
                <Header title="新建"
                        goBack={true}
                        click={this.handleClick}/>

                <div style={{marginTop: 50,}}>
                    <Paper zDepth={2}>
                        <div style={{paddingTop: 15, paddingBottom: 10, paddingLeft: 10}}
                             className="bor_bottom">
                            选择主题：
                            <select style={styles.select} ref={(input) => this.dd = input}>
                                <option value="ask">问答</option>
                                <option value="share">分享</option>
                                <option value="job">招聘</option>
                            </select>

                            <a style={styles.button} onClick={this.handleAdd}>发布</a>

                        </div>

                        <div className="bor_bottom" style={{padding: 10}}>
                            <input placeholder="标题，字数10字以上"
                                   style={this.state.isTitle ? styles.title : styles.errTitle}
                                   ref={(input) => this.textAdd = input}/>
                        </div>
                        <div style={styles.topics}>
                            <textarea placeholder="回复支持MarkDown语法"
                                      style={this.state.isContent ? styles.content : styles.errContent}
                                      rows="45"
                                      ref={(input) => this.textArea = input}/>
                        </div>

                    </Paper>
                </div>

            </div>
        );
    }
}

NewTopics.propTypes = {
    newTopicAction: React.PropTypes.func
};
NewTopics.defaultProps = {};
function mapStateToProps(state) {
    return {
        newTopics: state.addArticleReduce
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newTopicAction: bindActionCreators(userAddArticle, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTopics);
