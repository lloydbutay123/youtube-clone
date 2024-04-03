export const API_KEY = "AIzaSyAy3Avgr2hxc2r761s8CaT0IF-ss9J2kOw";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
