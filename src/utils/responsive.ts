import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

/**
 * @description - Responsive Height
 */
export const rh = (pixel: number) => {
  let transform = heightPercentageToDP((pixel * 100) / 683);
  return transform;
};

/**
 * @description - Responsive Width
 */
export const rw = (pixel: number) => {
  let transform = widthPercentageToDP((pixel * 100) / 411);
  return transform;
};
