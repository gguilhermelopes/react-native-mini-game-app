import { StyleSheet, Text, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>;
};

export default InstructionText;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  instructionsText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 18 : 24,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: deviceWidth < 380 ? 24 : 36,
  },
});
