import * as Font from 'expo-font';

export default async () =>
  await Font.loadAsync({
    'FONT_REGULAR': require('../assets/fonts/IBMPlexSans-Regular.ttf'),
    'FONT_SEMI_BOLD': require('../assets/fonts/IBMPlexSans-SemiBold.ttf'),
});