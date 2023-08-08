import { StyleSheet, TextProps, Text } from "react-native";

type TextWeight =  "regular" | "medium" | "bold";

interface MyTextProps extends TextProps {
  textWeight?: TextWeight
}

export default function MyText({textWeight = 'regular', style, children}: MyTextProps) {
  return <Text style={[style, styles[textWeight]]}>{children}</Text>;
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'RobotoRegular',
    fontWeight: 'normal',
    color: "#fff",
  },
  medium: {
    fontFamily: 'RobotoMedium',
    fontWeight: 'normal',
    color: "#fff",
  },
  bold: {
    fontFamily: 'RobotoBold',
    fontWeight: 'normal',
    color: "#fff",
  }
})

