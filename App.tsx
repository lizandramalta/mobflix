import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import header from "./assets/Header.png";
import banner from "./assets/Banner.png";
import MyText from "./src/components/MyText";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: Roboto_400Regular,
    RobotoMedium: Roboto_500Medium,
    RobotoBold: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={header} />
      </View>
      <View style={styles.banner}>
        <Image source={banner} />
        <TouchableOpacity style={styles.highlightButton}>
          <MyText textWeight="regular" style={styles.highlightButtonText}>
            Assista agora
          </MyText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
  },
  banner: {
    position: "relative",
    alignItems: "center",
  },
  highlightButton: {
    borderRadius: 8,
    backgroundColor: "#2478DF",
    paddingHorizontal: 9,
    width: 128,
    height: 43,
    justifyContent: "center",
    position: "absolute",
    top: 74.5,
  },
  highlightButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 21,
  },
});
