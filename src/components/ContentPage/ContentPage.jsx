import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import s from './ContentPage.module.scss';
import { ContentPageFooter } from './ContentPageFooter/ContentPageFooter';
import ContentPageHeader from './ContentPageHeader/ContentPageHeader';
import { ContentPageMain } from './ContentPageMain/ContentPageMain';
import { TopBar } from './TopBar/TopBar';
import { initializeApp } from '../../redux/contentPageReduser';
import loader from '../../img/gif/Loading.gif'

const ContentPage = (props) => {
	useEffect(() => {
		props.initializeApp()
		console.log('[1')
	},[])
	if (!props.initialize) {
		return <div className={s.Loader}><img src={loader} alt=""/></div>
	}
  return (
    <div className={s.ContentPage_container}>
      <ContentPageHeader name={props.name} />
			<TopBar setIsLoggedIn={props.setIsLoggedIn} dispatch={props.store.dispatch} />
      <ContentPageMain />
      <ContentPageFooter />
    </div>
  );
}


const mapStateToProps = (state) => {
	return {
		state,
	}
}
export default compose(
	connect(mapStateToProps, { initializeApp })
)(ContentPage)