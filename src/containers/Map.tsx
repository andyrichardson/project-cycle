import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updatePoints } from '../actions';
import { MapComponent } from '../components';

const mapStateToProps = (state: ApplicationState) => ({ points: state.points });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // @ts-ignore
  updatePoints: () => dispatch(updatePoints())
});

export const Map = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
