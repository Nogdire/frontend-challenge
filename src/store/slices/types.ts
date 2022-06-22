export interface ICatObject {
  breeds: any[];
  height: number;
  width: number;
  id: string;
  url: string;
}

export interface IAllCatsState {
  data: ICatObject[];
  page: number;
  loading: boolean;
  error: null | string;
}

export interface IFavoriteState {
  favoriteCats: ICatObject[];
}
