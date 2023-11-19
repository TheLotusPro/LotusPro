import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, ActivityIndicator, TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";

const EditClientProfile = ({ navigation }) => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);
  const [firmName, setFirmName] = useState("");
  const [fullName, setFullName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [servicesProvided, setServicesProvided] = useState("");
  const [areasServiced, setAreasServiced] = useState("");


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

      <TextInput
        style={[styles.input, {color: colors.text}]}
        placeholder="Firm Name"
        value={firmName}
        onChangeText={(text) => setFirmName(text)}
      />
      <TextInput
        style={[styles.input, {color: colors.text}]}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
       style={[styles.input, {color: colors.text}]}
        placeholder="Website"
        value={website}
        onChangeText={(text) => setWebsite(text)}
      />
      <TextInput
         style={[styles.input, {color: colors.text}]}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
         style={[styles.input, {color: colors.text}]}
        placeholder="Business Description"
        value={businessDescription}
        onChangeText={(text) => setBusinessDescription(text)}
      />
      <TextInput
         style={[styles.input, {color: colors.text}]}
        placeholder="License Number"
        value={licenseNumber}
        onChangeText={(text) => setLicenseNumber(text)}
      />
      <TextInput
        style={[styles.input, {color: colors.text}]}
        placeholder="Services Provided"
        value={servicesProvided}
        onChangeText={(text) => setServicesProvided(text)}
      />
      <TextInput
         style={[styles.input, {color: colors.text}]}
        placeholder="Areas Serviced"
        value={areasServiced}
        onChangeText={(text) => setAreasServiced(text)}
      />

     
      
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
    width: "100%",
    borderRadius: 5
  },
});

export default EditClientProfile;
