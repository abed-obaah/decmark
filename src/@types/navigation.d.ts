export type RootStackParamList = {
  // AUTH
  Onboarding: undefined;
  WelcomeScreen: undefined;
  LogIn: undefined;
  SignUp: undefined;
  SignUpWithNumber: undefined;
  OTPScreen: undefined;
  ForgotPasswordScreen: undefined;

  // BOTTOM TABS
  HomeScreen: undefined;
  MyServiceScreen: undefined;
  MessageScreen: undefined;
  WalletScreen: undefined;

  // SERVICES
  AddServiceScreen: undefined;
  OfferDetailScreen: undefined;
  AvailableServiceScreen: { service: string };
  
  // PROFILE
  MenuScreen: undefined;
  AccountScreen: undefined;
  EditProfileScreen: undefined;
  ProviderProfileScreen: undefined;

  // ROOTS
  AuthStack: { screen: string }
  BottomTabNavigator: { screen: string }
  ProfileStack: { screen: string }
  ServiceStack: { screen: string }
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}