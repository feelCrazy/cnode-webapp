/**
 * Created by ming on 2017/3/1
 */

import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Header from '../components/Header';

class HotPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClickBack = () => {
        browserHistory.go(-1)
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
export default HotPage;
