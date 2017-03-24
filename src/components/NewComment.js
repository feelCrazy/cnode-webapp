/**
 * Created by ming on 2017/3/23
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    container: {
        padding: 10,
        textAlign: "center"
    },
    textArea: {
        width: "90%", height: 150, padding: 15
    },
    button: {
        width: "40%",
        marginTop: 10,
        marginBottom: 10
    }

};

class NewComment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleReply = () => {
        const input = this.textReply;
        const login = JSON.parse(window.localStorage.getItem("userAcc"));
        if (input.value.trim() !== "" && login) {
            this.props.addComment(this.props.id, login.accesstoken, input.value.trim());
            input.value = ''
        }

    };

    render() {
        return (
            <div style={styles.container}>
                <textarea style={styles.textArea}
                          placeholder="回复支持MarkDown语法"
                          ref={(input) => this.textReply = input}/>
                <RaisedButton label="提交"
                              backgroundColor="#ddd"
                              style={styles.button}
                              onTouchTap={this.handleReply}/>

            </div>
        );
    }
}

NewComment.propTypes = {
    addComment: React.PropTypes.func,
    id: React.PropTypes.string
};
NewComment.defaultProps = {};
export default NewComment;
