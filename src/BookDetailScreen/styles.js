import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  label: {
    fontSize: '15@ms',
    fontWeight: '900'
  },
  content: {
    fontSize: '15@ms',
    marginLeft: '10@ms'
  }
});
