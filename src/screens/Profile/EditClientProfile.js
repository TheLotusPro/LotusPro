import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";

const EditClientProfile = ({ navigation }) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Done"
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              navigation.goBack();
            }, 2000); // 10 seconds
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={[{ color: colors.text }]}>EditClientProfile</Text>
     
      
      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="small" color={"#fa8072"} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#fa807220",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditClientProfile;
