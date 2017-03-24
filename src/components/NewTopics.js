/**
 * Created by ming on 2017/3/24
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import {browserHistory} from 'react-router';

class NewTopics extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = () => {
        browserHistory.goBack();
    };

    render() {
        return (
            <div >
                <Header title="新建"
                        goBack={true}
                        click={this.handleClick}/>
                <div style={{textAlign: "center", marginTop: 56}}>
                    <form>
                        <div>
                            <select>
                                <option>问答</option>
                                <option>分享</option>
                                <option>招聘</option>
                            </select>
                        </div>

                        <div>
                            <input placeholder="标题"/>
                        </div>
                        <div>
                        <textarea placeholder="回复支持MarkDown语法">
                        </textarea>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

NewTopics.propTypes = {};
NewTopics.defaultProps = {};
export default NewTopics;
