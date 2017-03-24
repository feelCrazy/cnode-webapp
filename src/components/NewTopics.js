/**
 * Created by ming on 2017/3/24
 */
import React, {Component} from 'react';

class NewTopics extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <form>
                    <select>
                        <option>问答</option>
                        <option>分享</option>
                        <option>招聘</option>
                    </select>
                    <input placeholder="标题"/>
                    <textarea placeholder="回复支持MarkDown语法"
                    >

                    </textarea>
                </form>
            </div>
        );
    }
}

NewTopics.propTypes = {};
NewTopics.defaultProps = {};
export default NewTopics;
