import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
} from "@gluestack-ui/themed";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Option1Info = () => {
  const { colors } = useTheme();
  const [card, setCard] = useState("");
  const [name, setName] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");
  const getBorderColor = (value) => {
    return value.length > 0 ? "#33AB5F" : "#a9a9a9";
  };

  return (
    <View>
      <View>
        <TextInput
          style={[
            styles.input,
            { color: colors.text },
            { borderColor: getBorderColor(name) },
          ]}
          placeholder="Name on Card"
          placeholderTextColor={"gray"}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={[
            styles.input,
            { color: colors.text },
            { borderColor: getBorderColor(card) },
          ]}
          placeholder="Card Number"
          placeholderTextColor={"gray"}
          value={card}
          keyboardType="number-pad"
          onChangeText={(text) => setCard(text)}
        />
        {/* expire */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={[
              styles.inputExpCvv,
              { color: colors.text },
              { borderColor: getBorderColor(exp) },
            ]}
            placeholder="MM/YY"
            placeholderTextColor={"gray"}
            value={exp}
            keyboardType="number-pad"
            onChangeText={(text) => setExp(text)}
          />
          <TextInput
            style={[
              styles.inputExpCvv,
              { color: colors.text, marginLeft: 5 },
              { borderColor: getBorderColor(cvv) },
            ]}
            placeholder="CVV"
            placeholderTextColor={"gray"}
            value={cvv}
            keyboardType="number-pad"
            onChangeText={(text) => setCvv(text)}
          />
          <View style={{ marginLeft: 10 }}>
            <Entypo name="credit-card" size={30} color={colors.text} />
          </View>
        </View>
        {/* expire */}
      </View>
    </View>
  );
};

// Component for Option 2 information
const Option2Info = () => {
  const { colors } = useTheme();

  const handlePress = async () => {
    const url = "https://www.paypal.com/us/signin";

    // Checking if the link is supported
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link in the default browser
      await Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: "black",
          padding: 10,
          alignItems: "center",
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text style={[{ color: "white", fontWeight: "bold" }]}>
          Sign in to PayPal
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Component for Option 3 information
const Option3Info = () => {
  const { colors } = useTheme();

  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="logo-apple" size={24} color="white" />
          <Text style={{ marginLeft: 5, fontWeight: "bold", color: "white" }}>
            Apple Pay
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Component for Option 4 information
const Option4Info = () => {
  const { colors } = useTheme();

  return (
    <View>
      {/* Your custom component for Option 4 information */}
      <Text>Custom Component for Option 4 Information</Text>
    </View>
  );
};

const CheckOutPayments = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { colors } = useTheme();

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          size="lg"
          isInvalid={false}
          aria-label="Checkbox Label"
          isDisabled={false}
          isChecked={selectedOption === 1}
          onChange={() => handleCheckboxChange(1)}
        >
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <Ionicons name="card" size={30} color={colors.text} />
          <CheckboxLabel style={[styles.option, { color: colors.text }]}>
            Credit Card
          </CheckboxLabel>
        </Checkbox>
        {selectedOption === 1 && <Option1Info />}
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          size="lg"
          isInvalid={false}
          aria-label="Checkbox Label"
          isDisabled={false}
          isChecked={selectedOption === 2}
          onChange={() => handleCheckboxChange(2)}
        >
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <Fontisto name="paypal" size={21} color={colors.text} />
          <CheckboxLabel style={[styles.option, { color: colors.text }]}>
            PayPal
          </CheckboxLabel>
        </Checkbox>
        {selectedOption === 2 && <Option2Info />}
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          size="lg"
          isInvalid={false}
          aria-label="Checkbox Label"
          isDisabled={false}
          isChecked={selectedOption === 3}
          onChange={() => handleCheckboxChange(3)}
        >
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <FontAwesome5 name="cc-apple-pay" size={26} color={colors.text} />
          <CheckboxLabel style={[styles.option, { color: colors.text }]}>
            Apple Pay
          </CheckboxLabel>
        </Checkbox>
        {selectedOption === 3 && <Option3Info />}
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          size="lg"
          isInvalid={false}
          isDisabled={false}
          aria-label="Checkbox Label"
          isChecked={selectedOption === 4}
          onChange={() => handleCheckboxChange(4)}
        >
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <Ionicons name="card" size={30} color={colors.text} />
          <CheckboxLabel style={[styles.option, { color: colors.text }]}>
            AfterPay
          </CheckboxLabel>
        </Checkbox>
        {selectedOption === 4 && <Option4Info />}
      </View>
    </View>
  );
};

export default CheckOutPayments;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 40,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  checkboxContainer: {
    marginBottom: 10,
    padding: 5,
  },
  option: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",

    padding: 15,
    marginTop: 10,
  },
  inputExpCvv: {
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "30%",

    padding: 15,
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: "black",
    width: "100%",

    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
});
