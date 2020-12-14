export const CLICK_MAP = "CLICK_MAP" as const;
export const RESULT_LIST = "RESULT_LIST" as const;

export const setClickMap = (diff: string) => {
  return {
    type: CLICK_MAP,
    clickMap: diff,
  };
};

export const setResultList = (diff: any) => {
  return {
    type: RESULT_LIST,
    resultList: diff,
  };
};
