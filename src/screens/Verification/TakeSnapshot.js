import React, { useState, useEffect } from "react";
import { AppSafeAreaView } from "../../components/AppViews";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PageHeader from "@src/components/PageHeader";
import { MediumText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import { Camera, CameraType } from "expo-camera";
import ScannerSvg from "../../assets/svg/ScannerSVG.js";
import { useIsFocused } from "@react-navigation/native";

export default UploadScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState();
  const [startCamera, setStartCamera] = useState(false);
  const [type, setType] = useState(CameraType.front);
  const takeSnapshot = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      console.log(photo);

      // Navigate to the PhotoDisplayScreen and pass the photo URI as a parameter
      navigation.navigate("DisplayAll", { photoUri: photo.uri });
    }
  };
  const onCameraReady = () => {
    console.log("camera ready");
  };
  const isFocused = useIsFocused();
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  const getPermissionStatus = async () => {
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraStatus.status === "granted");
  };

  useEffect(() => {
    getPermissionStatus();
  }, []);

  if (!hasCameraPermission) {
    return (
      <View>
        <Text>Hello </Text>
      </View>
    );
  }

  return (
    <AppSafeAreaView>
      <PageHeader title={"Take Snapshot"} />

      {!startCamera ? (
        <>
          <MediumText style={{ textAlign: "center", marginTop: 20 }}>
            Take a selfie to proceed
          </MediumText>
          <View
            style={{
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScannerSvg />
          </View>
          <View style={{ flex: 0.3, paddingHorizontal: 15 }}>
            <AppButton label="Next" onPress={() => setStartCamera(true)} />
          </View>
        </>
      ) : (
        isFocused && (
          <View style={{ flex: 1 }}>
            <Camera
              ratio="16:9"
              type={type}
              ref={(ref) => setCameraRef(ref)}
              onCameraReady={onCameraReady}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 0,
              }}
            />
            <View style={styles.mask}>
              <View style={styles.maskOuter}>
                <View style={styles.maskInner} />
              </View>
            </View>
            <TouchableOpacity
              style={styles.snapButton}
              onPress={takeSnapshot}
              activeOpacity={0.7}
            >
              <View style={styles.snapButtonInner} />
            </TouchableOpacity>
          </View>
        )
      )}
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  mask: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  maskOuter: {
    width: "80%",
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  maskInner: {
    width: "95%",
    aspectRatio: 1,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#fff",
  },
  snapButton: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 40,
    padding: 10,
  },
  snapButtonInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#000",
  },
});
