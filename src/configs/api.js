/**
 * Created by ming on 2017/2/23
 */
const api = ' https://cnodejs.org/api/v1';

export const topics = '/topics';  //  主题首页， /:id 主题详情， post 新建主题
export const update = '/topics/update'; // 编辑主题
export const topic_collect = '/topic_collect/collect '; // 收藏主题
export const de_collect = '/topic_collect/de_collect '; // 取消收藏
export const user = 'user/';  // 用户详情
export const message = '/message/count';  // 获取未读消息数
export const allMessage = '/messages';  // 获取所有消息
export const markMessage = '/message/mark_all';  //标记所有消息为已读
export const accesstoken = '/accesstoken'; //验证key
export const type ='/topics?tab=""&limit=10'; // tab = good/share/job/ask/all , limit:条数


export const getFetch = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url, {})
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw `${res.status}, ${res.statusText}`;
                }
            })
            .then(json => {
                resolve(json);
            })
            .catch(err => {
                reject(err);
            });
    });
}