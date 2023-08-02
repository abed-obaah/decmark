import React, { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { COLORS, SIZES } from "@src/constants/theme";
import { Feather } from "@expo/vector-icons";
import { ErrorText, MediumText } from "@src/components/AppText";
import * as ImagePicker from "expo-image-picker";

const UploadView = ({ label, error, setImage, image }) => {
  const [backgroundColor, setBackgroundColor] = useState(COLORS.white);
  const [borderColor, setBorderColor] = useState(COLORS.primary);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage({ uri: result.uri, name: result.fileName });
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      {label && (
        <MediumText style={{ marginBottom: 3, color: COLORS.primary }}>
          {label}
        </MediumText>
      )}
      <TouchableOpacity
        onPress={pickImage}
        style={[
          styles.inputContainer,
          { backgroundColor },
          error ? { borderColor: COLORS.red } : { borderColor },
        ]}
      >
        {/* <MediumText>{image.name}</MediumText> */}
        <Feather
          name="upload"
          style={{
            color: COLORS.dark,
            fontSize: 16,
            paddingRight: 2.5,
          }}
        />
      </TouchableOpacity>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image.uri }} style={styles.image} />
          {/* <MediumText>{image.name}</MediumText> */}
        </View>
      )}
      {error && (
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <Feather
            name="alert-circle"
            style={{
              color: COLORS.red,
              fontSize: 16,
              paddingRight: 2.5,
            }}
          />
          <ErrorText>{error}</ErrorText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    marginTop: 10,
    // alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 5,
    borderRadius: SIZES.radius,
  },
});

export default UploadView;
