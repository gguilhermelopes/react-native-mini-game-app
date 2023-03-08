import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { View, Text } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressed,
        ]}
        android_ripple={{ color: "#99024d" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    elevation: 2,
  },
  buttonInnerContainer: {
    borderRadius: 28,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#72063c",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
