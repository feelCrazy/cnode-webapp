/**
 * Created by ming on 2017/3/7
 */
import React, {Component} from 'react';
import  {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDetails, userClcikUps} from '../actions/actions';
import Header from '../components/Header';
import Content from '../components/Content';
import CircularProgress from 'material-ui/CircularProgress';
import Reply from '../components/Reply'

let content;
let reply;
const style = {
    main: {
        textAlign: 'center'
    },
    progress: {
        marginTop: 50
    },

};
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.userAction.getDetails(this.props.params.id)
    }

    componentWillReceiveProps(newProps) {
        const {detailsState, userAction} = newProps;
        if (detailsState.res) {
            content = <Content data={detailsState.res}/>;
            reply = <Reply reply={detailsState.res.data} action={userAction.userClcikUps}/>
        }
    }


    handleClick = () => {
        browserHistory.goBack();
    };

    render() {
        const {detailsState} = this.props;
        // console.log(this.props.userAction);
        return (
            <div>
                <Header title="文章" click={this.handleClick} goBack={true}/>
                <div style={{paddingTop: 55}}>
                    { detailsState.isLoading ?
                        <div style={style.main}><CircularProgress style={style.progress} size={50}/>
                        </div> : content}
                </div>
                {reply}

            </div>
        );
    }
}

Article.propTypes = {
    userAction: React.PropTypes.object,
    detailsState: React.PropTypes.object,
    params: React.PropTypes.object,
};
Article.defaultProps = {};

function mapStateToProps(state) {
    return {
        detailsState: state.articleDetailsReduce
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators({getDetails, userClcikUps}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article);
