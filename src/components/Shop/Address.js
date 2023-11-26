import { StyleSheet, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import {
    Text,
    Checkbox,
    CheckboxIndicator,
    CheckboxIcon,
    CheckIcon,
    CheckboxLabel,
  } from "@gluestack-ui/themed";

const Address = () => {
    const { colors } = useTheme();
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
  
    const handlePress = () => {
      setLoading(true);
  
      // Simulate a 5-second delay before navigating
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("CheckOutFinal");
      }, 1000);
    };
  
    const getBorderColor = (value) => {
      return value.length > 0 ? "#33AB5F" : "#a9a9a9";
    };
  
    return (
      <View style={{   backgroundColor: "#fa807210", marginBottom: 10 }}>
        <View style={{ padding: 20 }}>
          <Text style={[styles.boldText, { color: colors.text }]}>
            Shipping Address
          </Text>
  
          <View>
            <TextInput
              style={[
                styles.input,
                { color: colors.text },
                { borderColor: getBorderColor(addressOne) },
              ]}
              placeholder="Address 1"
              placeholderTextColor={"gray"}
              value={addressOne}
              numberOfLines={2}
              onChangeText={(text) => setAddressOne(text)}
            />
  
            <TextInput
              style={[
                styles.input,
                { color: colors.text },
                { borderColor: getBorderColor(addressTwo) },
              ]}
              placeholder="Apt, Suite, (Optional)"
              placeholderTextColor={"gray"}
              value={addressTwo}
              numberOfLines={2}
              onChangeText={(text) => setAddressTwo(text)}
            />
  
            <TextInput
              style={[
                styles.input,
                { color: colors.text },
                { borderColor: getBorderColor(city) },
              ]}
              placeholder="City"
              placeholderTextColor={"gray"}
              value={city}
              numberOfLines={2}
              onChangeText={(text) => setCity(text)}
            />
  
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TextInput
                style={[
                  styles.inputCityState,
                  { color: colors.text },
                  { borderColor: getBorderColor(state) },
                ]}
                placeholder="State"
                placeholderTextColor={"gray"}
                value={state}
                numberOfLines={2}
                onChangeText={(text) => setState(text)}
              />
              <TextInput
                style={[
                  styles.inputCityState,
                  { color: colors.text },
                  { borderColor: getBorderColor(zip) },
                ]}
                placeholder="Zip"
                placeholderTextColor={"gray"}
                value={zip}
                numberOfLines={2}
                onChangeText={(text) => setZip(text)}
              />
            </View>
  
            <TextInput
              style={[
                styles.input,
                { color: colors.text },
                { borderColor: getBorderColor(phone) },
              ]}
              placeholder="Phone Number"
              placeholderTextColor={"gray"}
              value={phone}
              numberOfLines={2}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <Checkbox
              size="md"
              isInvalid={false}
              isDisabled={false}
              aria-label="Checkbox Label"
            >
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel style={{ color: colors.text }}>
                Set as default shipping address
              </CheckboxLabel>
            </Checkbox>
          </View>
  
          <TouchableOpacity onPress={handlePress} style={styles.buttonNext}>
            <View style={{ flexDirection: "row" }}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Continue
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  

export default Address

const styles = StyleSheet.create({
    buttonNext: {
        backgroundColor: "#33AB5F",
        width: "100%",
        marginBottom: 10,
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 15,
      },
      input: {
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: "100%",
    
        padding: 15,
        marginTop: 10,
      },
      inputCityState: {
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: "47%",
    
        padding: 15,
        marginTop: 10,
      },
      boldText: {
        fontWeight: "bold",
        fontSize: 18,
      },


})