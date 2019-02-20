import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
	Addition,
	Button,
	SearchWrapper
} from './style.js';

class Header extends Component {

	getListArea(show) {
		if (show) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
						<SearchInfoList>
							<SearchInfoItem>教育</SearchInfoItem>
							<SearchInfoItem>教育</SearchInfoItem>
							<SearchInfoItem>教育</SearchInfoItem>
							<SearchInfoItem>教育</SearchInfoItem>
							<SearchInfoItem>教育</SearchInfoItem>
							<SearchInfoItem>教育</SearchInfoItem>
						</SearchInfoList>
					</SearchInfoTitle>
				</SearchInfo>
			)
		} else {
			return null
		}
	}

	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登录</NavItem>
					<NavItem className='right'>
						<span className="iconfont">&#xe636;</span>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</span>
						{this.getListArea(this.props.focused)}
					</SearchWrapper>
					<Addition>
						<Button className='writting'>
						<span className="iconfont">&#xe615;</span>
						写文章</Button>
						<Button className='reg'>注册</Button>
					</Addition>
				</Nav>
			</HeaderWrapper>
		)
	}
}



const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']) // state.get('header').get('focused')
	}
}

const mapDispathToProps = (dispath) => {
	return {
		handleInputFocus() {
			dispath(actionCreators.getList());
			dispath(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispath(actionCreators.searchBlur());
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);