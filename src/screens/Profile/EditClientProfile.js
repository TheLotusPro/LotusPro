import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  View,
  ActivityIndicator,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Text,
} from "@gluestack-ui/themed";
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
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");

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

  const getBorderColor = (value) => {
    return value.length > 0 ? "#33AB5F" : "#a9a9a950";
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={120}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <Avatar size="xl">
            <AvatarFallbackText>SS</AvatarFallbackText>
            <AvatarImage
              size="xl"
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </Avatar>
          <Text style={[styles.avatarText, { color: colors.text }]}>
            Edit Profile Image
          </Text>
        </View>

        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(firmName) },
            ]}
            placeholder="Firm Name"
            value={firmName}
            multiline
            autoFocus
            numberOfLines={4}
            placeholderTextColor={"#a9a9a980"}
            onChangeText={(text) => setFirmName(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(fullName) },
            ]}
            placeholder="Full Name"
            value={fullName}
            multiline
            autoFocus
            numberOfLines={4}
            placeholderTextColor={"#a9a9a980"}
            onChangeText={(text) => setFullName(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(website) },
            ]}
            placeholder="Website"
            value={website}
            multiline
            autoFocus
            keyboardType="url"
            numberOfLines={4}
            placeholderTextColor={"#a9a9a980"}
            onChangeText={(text) => setWebsite(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(email) },
            ]}
            placeholder="Email"
            value={email}
            multiline
            autoFocus
            placeholderTextColor={"#a9a9a980"}
            numberOfLines={4}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={[
              styles.inputExtended,
              { color: colors.text },
              { borderColor: getBorderColor(businessDescription) },
            ]}
            placeholder="Business Description"
            value={businessDescription}
            multiline
            autoFocus
            placeholderTextColor={"#a9a9a980"}
            numberOfLines={4}
            onChangeText={(text) => setBusinessDescription(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(licenseNumber) },
            ]}
            placeholder="Business License Number"
            value={licenseNumber}
            multiline
            autoFocus
            placeholderTextColor={"#a9a9a980"}
            numberOfLines={4}
            onChangeText={(text) => setLicenseNumber(text)}
          />
          <TextInput
            style={[
              styles.inputExtended,
              { color: colors.text },
              { borderColor: getBorderColor(servicesProvided) },
            ]}
            placeholder="Services Provided"
            value={servicesProvided}
            multiline
            autoFocus
            placeholderTextColor={"#a9a9a980"}
            numberOfLines={4}
            onChangeText={(text) => setServicesProvided(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(areasServiced) },
            ]}
            placeholder="Areas Serviced"
            placeholderTextColor={"#a9a9a980"}
            value={areasServiced}
            multiline
            autoFocus
            numberOfLines={4}
            onChangeText={(text) => setAreasServiced(text)}
          />

          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: colors.text, fontSize: 13 }}>
              Contact information below will not be public
            </Text>
          </View>

          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(addressOne) },
            ]}
            placeholder="Address 1"
            placeholderTextColor={"#a9a9a980"}
            value={addressOne}
            multiline
            autoFocus
            numberOfLines={4}
            onChangeText={(text) => setAddressOne(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(addressTwo) },
            ]}
            placeholder="Address 2"
            placeholderTextColor={"#a9a9a980"}
            value={addressTwo}
            multiline
            autoFocus
            numberOfLines={4}
            onChangeText={(text) => setAddressTwo(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(city) },
            ]}
            placeholder="City"
            placeholderTextColor={"#a9a9a980"}
            value={city}
            multiline
            autoFocus
            numberOfLines={4}
            onChangeText={(text) => setCity(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(state) },
            ]}
            placeholder="State"
            placeholderTextColor={"#a9a9a980"}
            value={state}
            multiline
            autoFocus
            numberOfLines={4}
            onChangeText={(text) => setState(text)}
          />
          <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(zip) },
            ]}
            placeholder="Zip Code"
            placeholderTextColor={"#a9a9a980"}
            value={zip}
            multiline
            autoFocus
            keyboardType="numeric"
            numberOfLines={4}
            onChangeText={(text) => setZip(text)}
          />
          {/* <TextInput
            style={[
              styles.input,
              { color: colors.text },
              { borderColor: getBorderColor(areasServiced) },
            ]}
            placeholder="Phone Number"
            placeholderTextColor={"#a9a9a980"}
            value={phone}
            keyboardType="phone-pad"
            autoFocus
            numberOfLines={4}
            onChangeText={(text) => setPhone(text)}
          /> */}

          {loading && (
            <View style={styles.overlay}>
              <ActivityIndicator size="large" color={"#fa807290"} />
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  input: {
    borderWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 5,
    padding: 20,
  },
  inputExtended: {
    borderWidth: 3,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 5,
    padding: 20,
    height: 80,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  
    marginTop: 100
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatarText: {
    marginTop: 10,
  },
});

export default EditClientProfile;
