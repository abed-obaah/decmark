import React from 'react'
import { StyleSheet } from 'react-native'
import { AppSafeAreaView, AppScrollView } from '../../components/AppViews'
import { MediumText } from '../../components/AppText'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'

export default ForgotPasswordScreen = () => {
  return (
    <AppSafeAreaView>
      <AppScrollView>
        <MediumText>Please enter the email linked to your account to get a reset information.</MediumText>
        <AppInput 
          label="Email"
          autoCapitalize="none"
        />
        <AppButton label="Send" />
      </AppScrollView>
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({})