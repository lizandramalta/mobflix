import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import MyText from "./MyText";

interface MenuButtonProps extends TouchableOpacityProps {
  color: string;
  text: string;
}

export default function MenuButton({ text, color, onPress }: MenuButtonProps) {
  
  const styles = getStyle(color);
    
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MyText style={styles.text}>{text}</MyText>
    </TouchableOpacity>
  );
}

const getStyle = (color: string) => StyleSheet.create({
    button: {
        backgroundColor: color,
        borderRadius: 12,
        height: 32,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 9,
    },
    text: {
        lineHeight: 18,
        fontSize: 16,
    }
})