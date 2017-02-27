/**
 * Created by ming on 2017/2/27
 */
import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '../actions/actions';

const styles = {
    main: {
        width: "30%",
        textAlign: "center",
        margin: '0 auto',
        paddingTop: 100
    },
    unLine: {
        borderColor: '#ee1862'
    },
    login: {
        marginTop: 20
    }

};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accesstoken: ''
        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value,
        });
    };

    clickLogin = (e) => {
        e.preventDefault();
        if (this.state.accesstoken !== '') {
            this.props.userAction(this.state.accesstoken);
            console.log(this.props);
        }
    };

    render() {
        return (
            <div>
                <div style={styles.main}>
                    <label>Key</label>
                    <TextField underlineFocusStyle={styles.unLine}
                               value={this.state.accesstoken}
                               name="accesstoken"
                               onChange={this.handleChange}
                               fullWidth={true}/>
                    <RaisedButton style={styles.login} primary={true} onClick={this.clickLogin}
                                  label="提交"/>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};
Login.defaultProps = {};

function mapStateToProps(state) {
    return {
        userState: state.userReduce
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userLogin, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
