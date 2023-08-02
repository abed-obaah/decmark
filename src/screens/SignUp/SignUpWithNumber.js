import React from "react";
import { View } from "react-native";
import { AppSafeAreaView, AppScrollView } from "../../components/AppViews";
import IndividualFields from "./components/IndividualFields";
import CompanyFields from "./components/CompanyFields";
import useTheme from "../../hooks/useAppTheme";
import { useHeaderHeight } from "@react-navigation/elements";

export default SignUpWithNumber = ({ route }) => {
  const { phoneNumber } = route.params;
  const { theme } = useTheme();
  const headerHeight = useHeaderHeight();

  const [toggleReferralID, setToggleReferralID] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <AppSafeAreaView>
      <View style={{ marginTop: 15, marginBottom: 5 }}>
        <GroupTab
          tabs={["Personal Account", "Company Account"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
      <AppScrollView>
        {activeTab ? (
          <CompanyFields
            theme={theme}
            phoneNumber={phoneNumber}
            toggleReferralID={toggleReferralID}
            setToggleReferralID={setToggleReferralID}
          />
        ) : (
          <IndividualFields
            theme={theme}
            phoneNumber={phoneNumber}
            toggleReferralID={toggleReferralID}
            setToggleReferralID={setToggleReferralID}
          />
        )}
      </AppScrollView>
    </AppSafeAreaView>
  );
};
