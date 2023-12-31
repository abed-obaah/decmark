import { useRef, FC } from "react";
import { View, Image, Modal, Animated, StyleSheet,Text, TouchableOpacity } from "react-native";
import { AppScrollView, AppSafeAreaView } from "@src/components/AppViews";
import { MaterialIcons } from "@expo/vector-icons";
import { MediumText, XtraLargeText } from "@src/components/AppText";
import AppButton from "@src/components/AppButton";
import WorkImages from "./components/WorkImages";
import RatingsReviews from "./components/RatingsReviews";
import Bio from "./components/Bio";
import AppBottomSheet from "@src/components/ui/BottomSheet";
import useBottomSheet from "@src/hooks/useBottomSheet";
import { useNavigation } from "@react-navigation/native";
import AppInput from "@src/components/AppInput";