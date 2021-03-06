export const ACTIVATE_SEARCH = 'ACTIVATE_SEARCH';
export const DEACTIVATE_SEARCH = 'DEACTIVATE_SEARCH';
export const FILTER_SEARCH = 'FILTER_SEARCH';

export const activateSearch = () => ({
  type: ACTIVATE_SEARCH
});

export const deactivateSearch = () => ({
  type: DEACTIVATE_SEARCH
});

export const filterSearch = (query: string) => ({
  query,
  type: FILTER_SEARCH
});
