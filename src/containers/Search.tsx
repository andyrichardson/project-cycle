import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { activateSearch, deactivateSearch } from '../actions';
import { SearchComponent } from '../components/Search';

const mapStateToProps = (state: ApplicationState) => ({ search: state.search });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  activateSearch: () => dispatch(activateSearch()),
  deactivateSearch: () => dispatch(deactivateSearch())
});

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
