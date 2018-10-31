import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  view: {
    flex: 1
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: '20@ms'
  }
});
