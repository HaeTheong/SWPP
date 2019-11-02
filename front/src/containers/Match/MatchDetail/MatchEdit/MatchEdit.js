/*
 *  TODO : input validation + all TODOs in the lines
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as actionCreators from '../../../../store/actions';
import MatchForm from '../../../../components/Match/MatchForm/MatchForm';
// import LocationPopUp from ''

class MatchEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      // matchThumbnail
      categoryID: 0,
      capacity: 0,
      isOnline: false,
      locationText: '',
      // latitude and longitude will be implemented or removed after applying Google Map API
      // locationLatitude: '',
      // locationLongitude: '',
      timeBegin: new Date(),
      timeEnd: new Date(),
      additionalInfo: '',
      isPeriodic: false,
      period: 0,
      isAgeRestricted: false,
      restrictAgeFrom: 0,
      restrictAgeTo: 0,
      isGenderRestricted: false,
      restrictToMale: false,
      restrictToFemale: false,
    };
  }

  componentDidMount() {
    const { selected } = this.props;
    console.log(selected);
    console.log(selected.timeBegin);
    console.log(typeof selected.timeBegin);
    this.setState(selected);
  }

  // TODO
  // onClickCreate = () => {};

  // this will be implemented or removed after applying Google Map API
  // handleLocationSearch = () => {};

  handleInputTitleChange = event =>
    this.setState({ title: event.target.value });

  // handleNewMatchThumbnailUploaded

  // TODO : implement dropdown
  handleInputCategoryIDChange = event =>
    this.setState({ categoryID: event.target.value });

  handleInputCapacityChange = event =>
    this.setState({ capacity: event.target.value });

  handleInputIsOnlineChange = event =>
    this.setState({ isOnline: event.target.checked });

  handleInputLocationTextChange = event =>
    this.setState({ locationText: event.target.value });

  // handleInputLocationLatitudeChange = event =>
  //   this.setState({ locationLatitude: event.target.value });

  // handleInputLocationLongitudeChange = event =>
  //   this.setState({ locationLongitude: event.target.value });

  handleInputTimeBeginChange = event => {
    const { timeBegin } = this.state;
    const inputDate = event.target.value;
    const newDate = timeBegin;
    if (inputDate.split('-').length !== 1) {
      // Date Changed
      newDate.setFullYear(parseInt(inputDate.split('-')[0], 10));
      newDate.setMonth(parseInt(inputDate.split('-')[1], 10) - 1);
      newDate.setDate(parseInt(inputDate.split('-')[2], 10));
    } else {
      // Time Changed
      newDate.setHours(parseInt(inputDate.split(':')[0], 10));
      newDate.setMinutes(parseInt(inputDate.split(':')[1], 10));
    }
    this.setState({ timeBegin: newDate });
  };

  // TODO: alert error message if the end time earlier than the start time
  handleInputTimeEndChange = event => {
    const { timeEnd } = this.state;
    const inputDate = event.target.value;
    const newDate = timeEnd;
    if (inputDate.split('-').length !== 1) {
      // Date Changed
      newDate.setFullYear(parseInt(inputDate.split('-')[0], 10));
      newDate.setMonth(parseInt(inputDate.split('-')[1], 10) - 1);
      newDate.setDate(parseInt(inputDate.split('-')[2], 10));
    } else {
      // Time Changed
      newDate.setHours(parseInt(inputDate.split(':')[0], 10));
      newDate.setMinutes(parseInt(inputDate.split(':')[1], 10));
    }
    this.setState({ timeBegin: newDate });
  };

  handleInputAdditionalInfoChange = event =>
    this.setState({ additionalInfo: event.target.value });

  handleInputIsPeriodicChange = event =>
    this.setState({ isPeriodic: event.target.checked });

  handleInputPeriodChange = event =>
    this.setState({ period: event.target.value });

  handleInputIsAgeRestrictedChange = event =>
    this.setState({ isAgeRestricted: event.target.checked });

  handleInputRestrictAgeFromChange = event =>
    this.setState({ restrictAgeFrom: event.target.value });

  handleInputRestrictAgeToChange = event =>
    this.setState({ restrictAgeTo: event.target.value });

  handleInputIsGenderRestrictedChange = event =>
    this.setState({ isGenderRestricted: event.target.checked });

  // TODO : if setting one while the other is true -> set the other as false
  handleButtonRestrictToMaleClicked = () => {
    const { restrictToMale } = this.state;
    this.setState({ restrictToMale: !restrictToMale });
  };

  handleButtonRestrictToFemaleClicked = () => {
    const { restrictToFemale } = this.state;
    this.setState({ restrictToFemale: !restrictToFemale });
  };

  onClickCreate = () => {
    const { onEdit } = this.props;
    const { timeBegin, timeEnd, restrictToMale } = this.state;
    const matchInfo = {
      ...this.state,
      timeBegin: [
        timeBegin.getFullYear(),
        timeBegin.getMonth(),
        timeBegin.getDate(),
        timeBegin.getHours(),
        timeBegin.getMinutes(),
      ],
      timeEnd: [
        timeEnd.getFullYear(),
        timeEnd.getMonth(),
        timeEnd.getDate(),
        timeEnd.getHours(),
        timeEnd.getMinutes(),
      ],
      restrictedGender: restrictToMale,
    };
    delete matchInfo.restrictToMale;
    delete matchInfo.restrictToFemale;
    onEdit(matchInfo);
  };

  render() {
    const {
      title,
      // matchThumbnail
      categoryID,
      capacity,
      isOnline,
      locationText,
      // locationLatitude,
      // locationLongitude,
      timeBegin,
      timeEnd,
      additionalInfo,
      isPeriodic,
      period,
      isAgeRestricted,
      restrictAgeFrom,
      restrictAgeTo,
      isGenderRestricted,
      restrictToMale,
      restrictToFemale,
    } = this.state;

    return (
      <div className="MatchEdit">
        <h1>Edit Match</h1>
        <MatchForm
          title={title}
          // matchThumbnail
          categoryID={categoryID}
          capacity={capacity}
          isOnline={isOnline}
          locationText={locationText}
          // locationLatitude={locationLatitude}
          // locationLongitude={locationLongitude}
          timeBegin={timeBegin}
          timeEnd={timeEnd}
          additionalInfo={additionalInfo}
          isPeriodic={isPeriodic}
          period={period}
          isAgeRestricted={isAgeRestricted}
          restrictAgeFrom={restrictAgeFrom}
          restrictAgeTo={restrictAgeTo}
          isGenderRestricted={isGenderRestricted}
          restrictToMale={restrictToMale}
          restrictToFemale={restrictToFemale}
          handleInputTitleChange={this.handleInputTitleChange}
          handleInputCategoryIDChange={this.handleInputCategoryIDChange}
          handleInputCapacityChange={this.handleInputCapacityChange}
          handleInputIsOnlineChange={this.handleInputIsOnlineChange}
          handleInputLocationTextChange={this.handleInputLocationTextChange}
          // handleInputLocationLatitudeChange={
          //   this.handleInputLocationLatitudeChange
          // }
          // handleInputLocationLongitudeChange={
          //   this.handleInputLocationLongitudeChange
          // }
          handleInputTimeBeginChange={this.handleInputTimeBeginChange}
          handleInputTimeEndChange={this.handleInputTimeEndChange}
          handleInputAdditionalInfoChange={this.handleInputAdditionalInfoChange}
          handleInputIsPeriodicChange={this.handleInputIsPeriodicChange}
          handleInputPeriodChange={this.handleInputPeriodChange}
          handleInputIsAgeRestrictedChange={
            this.handleInputIsAgeRestrictedChange
          }
          handleInputRestrictAgeFromChange={
            this.handleInputRestrictAgeFromChange
          }
          handleInputRestrictAgeToChange={this.handleInputRestrictAgeToChange}
          handleInputIsGenderRestrictedChange={
            this.handleInputIsGenderRestrictedChange
          }
          handleButtonRestrictToMaleClicked={
            this.handleButtonRestrictToMaleClicked
          }
          handleButtonRestrictToFemaleClicked={
            this.handleButtonRestrictToFemaleClicked
          }
        />
        {/* <LocationPopUp /> */}
        <button
          id="match-edit-button"
          type="button"
          onClick={this.onClickCreate}
        >
          Edit
        </button>
        <button id="match-edit-cancel-button" type="button">
          Cancel
        </button>
      </div>
    );
  }
}
MatchEdit.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  getMatch: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // matchThumbnail,
    categoryID: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    locationText: PropTypes.string.isRequired,
    // latitude and longitude will be implemented or removed after applying Google Map API
    // locationLatitude: PropTypes.number.isRequired,
    // locationLongitude: PropTypes.number.isRequired,
    timeBegin: PropTypes.instanceOf(Date).isRequired,
    timeEnd: PropTypes.instanceOf(Date).isRequired,
    additionalInfo: PropTypes.string.isRequired,
    isPeriodic: PropTypes.bool.isRequired,
    period: PropTypes.number.isRequired,
    isAgeRestricted: PropTypes.bool.isRequired,
    restrictAgeFrom: PropTypes.number.isRequired,
    restrictAgeTo: PropTypes.number.isRequired,
    isGenderRestricted: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    selected: state.match.selected,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMatch: pk => dispatch(actionCreators.getMatch(pk)),
    onEdit: editMatchInfo => dispatch(actionCreators.editMatch(editMatchInfo)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MatchEdit));
