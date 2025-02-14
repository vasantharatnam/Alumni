import React from "react";
import PropTypes from "prop-types";
import Icon from "awesome-react-icons";
import {
	deleteAllFeedbacks,
} from "../../actions/extras";
import FeedbackCard from "../extras/FeedbackCard";

const DisplayFeedbacks = ({ feedbacks }) => {
	const deleteAll = (callback) => {
		const conf = window.confirm("This action cannot be undone. Are you sure ?")
		if (conf){
			callback();
		}
	}

	return (
		<React.Fragment>
			{feedbacks.length === 0 && (
				<div className="no-data-page">Nothing to show here</div>
			)}
			<div className="request-list-admin-dash float-child">
				{feedbacks.length > 0 && (
					<div style={{ marginTop: "1em" }}>
						<button
							className="btn btn-danger ml-2"
							onClick={() => deleteAll(deleteAllFeedbacks)}
						>
							Delete All
							<Icon name="trash" />
						</button>
					</div>
				)}
				{feedbacks.map((item) => {
					return <FeedbackCard key={item._id} data={item} />;
				})}
			</div>
		</React.Fragment>
	);
};

DisplayFeedbacks.propTypes = {
	feedbacks: PropTypes.array.isRequired,
};

export default DisplayFeedbacks;
