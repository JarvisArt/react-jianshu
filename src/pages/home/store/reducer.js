import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'http://img0.imgtn.bdimg.com/it/u=2883228894,2691211408&fm=26&gp=0.jpg'
  },{
    id: 2,
    title: '手绘',
    imgUrl: 'http://img3.imgtn.bdimg.com/it/u=4216666747,4106248422&fm=26&gp=0.jpg'
  }]
});

export default (state = defaultState, action) => {
	switch(action.type) {
		default: 
			return state;
	}
}