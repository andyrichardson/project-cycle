import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updatePoints } from '../actions';
import { MapComponent } from '../components';

const mapStateToProps = (state: ApplicationState) => ({
  points: state.points,
  searchActive: state.search.active
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updatePoints: () => updatePoints(dispatch)
});

export const Map = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
