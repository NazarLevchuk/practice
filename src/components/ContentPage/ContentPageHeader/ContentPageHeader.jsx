import { connect } from "react-redux";
import React, { useState } from "react";
import { compose } from "redux";
import s from "./ContentPageHeader.module.scss";

const ContentPageHeader = (props) => {
	const [showHeader, setShowHeader] = useState(true)
	const toggleHeader = () => {
		setShowHeader(!showHeader)
	}
	return (
		<>
			{showHeader ? (
				<div className={s.ContentPageHeader}>
					Hello, {props.name}
					<button onClick={toggleHeader} />
				</div>
			) : null}
		</>
	);

};

const mapStateToPtops = (state) => {
	return {
		name: state.contentPageReduser.email
	}
}
export default compose(
connect(mapStateToPtops))(ContentPageHeader)