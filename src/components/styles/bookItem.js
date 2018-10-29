import { StyleSheet } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  viewLabels: {
    paddingLeft: '20@ms'
  },
  titleLabel: {
    fontWeight: '900',
    fontSize: '14@ms'
  },
  authorLabel: {
    fontSize: '12@ms'
  },
  thumbnail: {
    margin: '5@ms',
    width: '30@ms',
    height: '30@vs',
    borderRadius: '20@s'
  }
});
