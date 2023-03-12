import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionsText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 36,
  },
});
