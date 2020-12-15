export interface ReducerType {
  clickMap: string;
  resultList?: ResultListType[];
}

export interface ResultListType {
  거래금액: string;
  건축년도: number;
  년: number;
  도로명: string;
  도로명건물본번호코드: string;
  도로명건물부번호코드: string;
  도로명시군구코드: number;
  도로명일련번호코드: string;
  도로명지상지하코드: number;
  도로명코드: number;
  법정동: string;
  법정동본번코드: string;
  법정동부번코드: string;
  법정동시군구코드: number;
  법정동읍면동코드: number;
  법정동지번코드: number;
  아파트: string;
  월: number;
  일: number;
  일련번호: string;
  전용면적: number;
  지번: number;
  지역코드: number;
  층: number;
}

export interface ActionType {
  type: string;
  clickMap?: string;
  resultList?: ResultListType[];
}

export interface HeaderProps {
  clickMap: string;
}

export interface ListBoxProps {
  resultList: ResultListType[];
}

export interface MapPhotoProps {
  clickMap: string;
  setClickMap: (diff: string) => void;
  setResultList: (diff: ResultListType[]) => void;
}
export interface mapStateToPropsType {
  Reducer: {
    resultList: ResultListType[];
    clickMap: string;
  };
}
