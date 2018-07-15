import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { activateSearch, deactivateSearch, filterSearch } from '../actions';
import { SearchComponent } from '../components/Search';

const mapStateToProps = (state: ApplicationState) => ({
  search: {
    ...state.search,
    results:
      state.search.query !== ''
        ? state.points.results.filter(
            point =>
              point.name
                .toLowerCase()
                .indexOf(state.search.query.toLocaleLowerCase()) !== -1
          )
        : []
  }
});

const mapDispatchToProps = (dispatch: Dispatch, state: ApplicationState) => ({
  activateSearch: () => dispatch(activateSearch()),
  deactivateSearch: () => dispatch(deactivateSearch()),
  filterSearch: (filter: string) => dispatch(filterSearch(filter))
});

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
