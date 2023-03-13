import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ guess, roundNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>
        Phone's Guess: <Text style={styles.guessText}>{guess}</Text>
      </Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: Colors.primary800,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.125,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
  guessText: {
    fontFamily: "open-sans-bold",
  },
});
