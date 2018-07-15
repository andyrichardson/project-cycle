interface RecievePointsAction {
  data: BikePoint[];
  receivedAt: number;
  type: string;
}

interface FilterSearchAction {
  query: string;
  type: string;
}
