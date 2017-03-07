/**
 * Created by ming on 2017/3/7
 */
import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import '../assets/App.css'

const style = {
    container: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainLeft: {
        width: '70%'
    },
    mainRight: {
        width: '25%',
    },
    title: {

        padding: 10,
    }

};

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {data} = this.props;
        return (
            <div>
                <div style={style.container}>
                    <Paper zDepth={2} style={style.mainLeft}>
                        <div className='main'
                             dangerouslySetInnerHTML={{__html: data.data.content}}></div>
                    </Paper>
                    <Paper style={style.mainRight}>
                        <div>
                            <p style={style.title}>作者</p>
                            <Avatar/>
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    data: PropTypes.object.isRequired
};
Article.defaultProps = {};
export default Article;
