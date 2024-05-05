import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as ExpoLockTask from "expo-lock-task";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    ExpoLockTask.startLockTask();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>{ExpoLockTask.isLocked() ? "Kekunci" : "Ga kekunci"}</Text>
      <TouchableOpacity
        onPress={() => {
          if (ExpoLockTask.isLocked()) {
            ExpoLockTask.stopLockTask();
          } else {
            ExpoLockTask.startLockTask();
          }
        }}
      >
        <Text>Buka</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
