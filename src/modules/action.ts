export const CLICK_MAP = "CLICK_MAP" as const;
export const LOCATION_NUMBER = "LOCATION_NUMBER" as const;

// export const click_Map = () => ({ type: CLICK_MAP });
// export const location_Number = () => ({ type: LOCATION_NUMBER });

export const setClickMap = (diff: string) => {
  console.log(diff, "diff");
  return {
    type: CLICK_MAP,
    clickMap: diff,
  };
};
export const setLocationNumber = (diff: string) => {
  return {
    type: LOCATION_NUMBER,
    locationNumber: diff,
  };
};
