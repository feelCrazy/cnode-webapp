/**
 * Created by ming on 2017/3/24
 */

import React, {Component} from 'react';
import Header from '../components/Header';
import  {browserHistory} from 'react-router';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = () => {
        browserHistory.push('/');
    };

    render() {
        return (
            <div >
                <Header title="文章" click={this.handleClick} goBack={true}/>

                <div style={{marginTop: 51, padding: 15}}>
                    <div className="bor_bottom">
                        <h3 className="titleFont">
                            关于项目
                        </h3>
                        <p className="font14">该项目是基于cnode社区提供的api，使用react.js重写的SPA。</p>
                    </div>

                    <div className="bor_bottom">
                        <h3 className="titleFont">当前版本</h3>
                        <p className="font14">
                                1.0 (完善中)
                        </p>
                    </div>

                    <div className="bor_bottom">
                        <h3 className="titleFont">源码地址</h3>
                        <p className="font14">
                            <a style={{color: '#1192dd'}} href="https://github.com/CRwming/cnode-webapp">https://github.com/CRwming/cnode-webapp</a>
                        </p>
                    </div>

                    <div className="bor_bottom">
                        <h3 className="titleFont">问题反馈</h3>
                        <p className="font14">
                            <a style={{color: '#1192dd'}}
                               href="https://github.com/CRwming/cnode-webapp/issues">
                                发现问题或提出新需求
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

About.propTypes = {};
About.defaultProps = {};
export default About;
