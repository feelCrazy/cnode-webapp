/**
 * Created by ming on 2017/3/7
 */
import React, {Component} from 'react';
import  {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDetails} from '../actions/actions';
import Header from '../components/Header';
import Content from '../components/Content';
import CircularProgress from 'material-ui/CircularProgress';

let content;
const style = {
    main: {
        textAlign: 'center'
    },
    progress: {
        marginTop: 50
    },
    container: {
        margin: '0 auto',
        maxWidth: 1400,
        minWidth: 960,
        width: "90%"
    }
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
        const {detailsState} = newProps;
        if (detailsState.res) {
            content = <Content data={detailsState.res}/>
        }
    }


    handleClick = () => {
        browserHistory.goBack();
    };

    render() {
        const {detailsState} = this.props;

        return (
            <div>
                <Header title="文章" click={this.handleClick} goBack={true}/>
                <div style={style.container}>
                    { detailsState.isLoading ?
                        <div style={style.main}><CircularProgress style={style.progress} size={50}/>
                        </div> : content}
                </div>
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
        userAction: bindActionCreators({getDetails}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article);
