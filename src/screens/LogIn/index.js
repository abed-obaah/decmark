import React from 'react';
import { View } from 'react-native';
import EmailAddress from './components/EmailAddress';
import PhoneNumber from './components/PhoneNumber';
import { AppSafeAreaView, AppScrollView } from '../../components/AppViews';
import { MediumText, LinkText } from '../../components/AppText';
import GroupTab from '../../components/GroupTab';

export default LogIn = ({navigation}) => {
  const [activeTab, setActiveTab] = React.useState(1)

  return (
    <AppSafeAreaView>
      <View style={{ marginTop: 15, marginBottom: 5 }}>
        <GroupTab 
          tabs={['Email Address', 'Phone Number']} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
      <AppScrollView>
        <View>
          {activeTab ?
            <PhoneNumber />
          :
            <EmailAddress />
          }
          <MediumText
            style={{
              textAlign: 'center',
              paddingTop: 20,
            }}
            onPress={() => navigation.navigate("SignUp")}
          >
            New to DecMark?
            <LinkText> Create Account</LinkText>
          </MediumText>
        </View>
      </AppScrollView>
    </AppSafeAreaView>
  )
}