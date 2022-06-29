import React from 'react'
import './ContentPageHeader.module.scss'
import s from './ContentPageHeader.module.scss'

export class ContentPageHeader extends React.Component {
	name = localStorage.getItem('name')
	state = {
		showHeader: true,
	};
	toggleHeader = () => {
		this.setState(({ showHeader }) => {
			return {
				showHeader: !showHeader,
			};
		});
	};
	render() {
		return (
			<>
				{this.state.showHeader ? (
					<>
						<div className={s.ContentPageHeader}>
							Hello, {this.name}
							
							<button onClick={this.toggleHeader}></button>
						</div>
					</>) : null}
			</>
		)
	}
}
