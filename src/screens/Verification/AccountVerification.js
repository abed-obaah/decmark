import React from "react";
import GroupTab from "../../components/GroupTab";
import { AppSafeAreaView, AppScrollView } from "../../components/AppViews";
import EmailAddress from "./components/EmailAddress";
import PhoneNumber from "./components/PhoneNumber";
import { View } from "react-native";
import PageHeader from "@src/components/PageHeader";
export default AccountVerification = ({ navigation }) => {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <AppSafeAreaView>
      <PageHeader title={"Account Verification"} />
      <View style={{ marginTop: 15, marginBottom: 5 }}>
        <GroupTab
          tabs={["Email Address", "Phone Number"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
      <AppScrollView>
        <View>{activeTab ? <PhoneNumber /> : <EmailAddress />}</View>
      </AppScrollView>
    </AppSafeAreaView>
  );
};
