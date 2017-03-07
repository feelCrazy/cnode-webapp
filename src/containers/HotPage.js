/**
 * Created by ming on 2017/3/1
 */

import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getArticle} from '../actions/actions';
import Header from '../components/Header';

class HotPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.userAction.getArticle('good');
    }

    handleClickBack = () => {
        browserHistory.goBack()
    };

    render() {
        return (
            <div>
                <Header title="Hot" goBack={true} click={this.handleClickBack}/>
                <h1>Hello!</h1>
                <h1>Hello!</h1>
                <h1>Hello!</h1>
            </div>
        );
    }
}

HotPage.propTypes = {};
HotPage.defaultProps = {};

function mapStateToProps(state) {
    return {
        userState: state.userReduce,
        articleState: state.articleReduce,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators({getArticle}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HotPage);
