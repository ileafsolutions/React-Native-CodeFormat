import {StyleSheet} from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  subContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  titleText: {fontSize: 14, color: AppStyles.color.COLOR_WHITE},
});

export default styles;
