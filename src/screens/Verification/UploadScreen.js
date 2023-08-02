// import React, { useState } from "react";
// import { AppSafeAreaView, AppScrollView } from "../../components/AppViews";
// import PageHeader from "@src/components/PageHeader";
// import { MediumText } from "@src/components/AppText";
// import AppButton from "@src/components/AppButton";
// import UploadView from "./components/UploadView";

// export default UploadScreen = ({ navigation }) => {
//   const handleVerifyUpload = () => {
//     navigation.navigate("TakeSnapshot", { screen: "HomeScreen" });
//   };

//   const [nin, setNin] = useState({});

//   return (
//     <AppSafeAreaView>
//       <PageHeader title={"Upload ID"} />

//       <AppScrollView>
//         <MediumText style={{ textAlign: "center", marginTop: 20 }}>
//           Upload either of these 5 as a form of ID - National ID Card, Voters ID
//           Card, International Passport or Drivers License or Bank Statement.
//         </MediumText>
//         <UploadView image={nin} setImage={setNin} label={"Upload ID"} />
//         <UploadView image={nin} setImage={setNin} label={"CAC Certificate"} />
//         <AppButton label="Next" onPress={handleVerifyUpload} />
//       </AppScrollView>
//     </AppSafeAreaView>
//   );
// };



import React, { useState } from "react";
import { AppSafeAreaView, AppScrollView } from "../../components/AppViews";
import PageHeader from "@src/components/PageHeader";
import { MediumText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import UploadView from "./components/UploadView";

export default UploadScreen = ({ navigation }) => {
  const handleVerifyUpload = () => {
    navigation.navigate("TakeSnapshot", { screen: "HomeScreen" });
  };

  const [idCardImage, setIdCardImage] = useState(null);
  const [cacCertificateImage, setCacCertificateImage] = useState(null);

  return (
    <AppSafeAreaView>
      <PageHeader title={"Upload ID"} />

      <AppScrollView>
        <MediumText style={{ textAlign: "center", marginTop: 20 }}>
          Upload either of these 5 as a form of ID - National ID Card, Voters ID
          Card, International Passport, Drivers License, or Bank Statement.
        </MediumText>
        <UploadView image={idCardImage} setImage={setIdCardImage} label={"Upload ID"} />
        <UploadView image={cacCertificateImage} setImage={setCacCertificateImage} label={"CAC Certificate"} />
        <AppButton label="Next" onPress={handleVerifyUpload} />
      </AppScrollView>
    </AppSafeAreaView>
  );
};

