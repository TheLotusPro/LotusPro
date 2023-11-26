import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxLabel, CheckIcon } from '@gluestack-ui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// Component for Option 1 information
const Option1Info = () => {
  return (
    <View>
   
      <Text>Custom Component for Option 1 Information</Text>
    </View>
  );
};

// Component for Option 2 information
const Option2Info = () => {
  return (
    <View>
      {/* Your custom component for Option 2 information */}
      <Text>Custom Component for Option 2 Information</Text>
    </View>
  );
};

// Component for Option 3 information
const Option3Info = () => {
  return (
    <View>
      {/* Your custom component for Option 3 information */}
      <Text>Custom Component for Option 3 Information</Text>
    </View>
  );
};

// Component for Option 4 information
const Option4Info = () => {
  return (
    <View>
      {/* Your custom component for Option 4 information */}
      <Text>Custom Component for Option 4 Information</Text>
    </View>
  );
};

const TestScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            size="md"
            isInvalid={false}
            aria-label="Checkbox Label"
            isDisabled={false}
            isChecked={selectedOption === 1}
            onChange={() => handleCheckboxChange(1)}
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <MaterialIcons name="credit-card" size={24} color="black" />
            <CheckboxLabel> Credit Card</CheckboxLabel>
          </Checkbox>
          {selectedOption === 1 && <Option1Info />}
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            size="md"
            isInvalid={false}
            aria-label="Checkbox Label"
            isDisabled={false}
            isChecked={selectedOption === 2}
            onChange={() => handleCheckboxChange(2)}
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <Fontisto name="paypal" size={15} color="black" />
            <CheckboxLabel> PayPal</CheckboxLabel>
          </Checkbox>
          {selectedOption === 2 && <Option2Info />}
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            size="md"
            isInvalid={false}
            aria-label="Checkbox Label"
            isDisabled={false}
            isChecked={selectedOption === 3}
            onChange={() => handleCheckboxChange(3)}
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <FontAwesome5 name="cc-apple-pay" size={20} color="black" />
            <CheckboxLabel>Apple Pay</CheckboxLabel>
          </Checkbox>
          {selectedOption === 3 && <Option3Info />}
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            size="md"
            isInvalid={false}
            isDisabled={false}
            aria-label="Checkbox Label"
            isChecked={selectedOption === 4}
            onChange={() => handleCheckboxChange(4)}
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>AfterPay</CheckboxLabel>
          </Checkbox>
          {selectedOption === 4 && <Option4Info />}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 40,
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1
  },
  checkboxContainer: {
    marginBottom: 10,
  },
});

export default TestScreen;
