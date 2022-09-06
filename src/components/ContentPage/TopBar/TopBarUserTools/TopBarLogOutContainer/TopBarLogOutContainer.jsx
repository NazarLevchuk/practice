import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { removeCurrentUserDataThunkCreator } from '../../../../../redux/loggInReducer';
import { savePhotoThunkCreator } from '../../../../../redux/topBarReducer';
import { TopBarLogOut } from './TopBarLogOut/TopBarLogOut';

function TopBarLogOutContainer(props) {
  return (
		<TopBarLogOut {...props} />)
}

let mapStateToProps = (state) => {
	return {
		state,
		uploadedPhoto: state.topBarReducer.profilePhoto
	}
}

export default compose(
	connect(mapStateToProps, { removeCurrentUserDataThunkCreator, savePhotoThunkCreator }))(TopBarLogOutContainer)
