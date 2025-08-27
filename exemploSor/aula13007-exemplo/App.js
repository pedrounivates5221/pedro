import { View, Button, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title="Botão 1" />
        <Button title="Botão 2" />
        <Button title="Botão 3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 20,
  },
});
