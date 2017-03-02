/**
 * Created by ming on 2017/3/2
 */

import React, {Component, PropTypes} from 'react';
import {ListItem, List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    primaryText: {
        fontWeight: "bold",
        paddingBottom: 10,
        paddingLeft: 20
    },
    secondaryText: {
        color: "#9d9d9d",
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 14
    }

};

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {isFetch, data} = this.props;
        return (
            <div>
                {
                    isFetch ? <div style={{textAlign: 'center'}}><CircularProgress size={60}/></div>
                        : <List>
                            <ListItem primaryText={<Title/>}
                                      secondaryText={<Info/>}
                                      leftAvatar={<Avatar style={{borderRadius: 5}}
                                                          backgroundColor="#ddd"/>}/>
                            <Divider inset={true}/>
                        </List>
                }
            </div>
        );
    }
}

const Title = (props) => (
    <div style={styles.primaryText}>
        <span>FFFFFfFF</span>
    </div>
);

const Info = () => (
    <div style={styles.secondaryText}>
        <span>100/520</span>
        <span style={{paddingLeft: 15}}>分享</span>
    </div>
);

ArticleList.propTypes = {
    data: PropTypes.array.isRequired,
    isFetch: PropTypes.bool.isRequired,
};
ArticleList.defaultProps = {};
export default ArticleList;
