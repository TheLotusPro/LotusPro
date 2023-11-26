import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useNavigation, useTheme } from "@react-navigation/native";


const PromoCode = () => {
    const { colors } = useTheme();
    const [promo, setPromo] = useState("");
  
    const getBorderColor = (value) => {
      return value.length > 0 ? "#33AB5F" : "#a9a9a9";
    };
  
    return (
      <View
        style={{
          backgroundColor: "#fa807210",
          marginBottom: 10,
        }}
      >
        <View style={{ padding: 20 }}>
          <Text style={[styles.boldText, { color: colors.text }]}>
            Promo Code
          </Text>
  
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={[
                styles.inputPromo,
                { color: colors.text },
                { borderColor: getBorderColor(promo) },
              ]}
              placeholder="Promo Code"
              placeholderTextColor={"gray"}
              value={promo}
              numberOfLines={2}
              onChangeText={(text) => setPromo(text)}
            />
            <TouchableOpacity>
              <Text style={[styles.boldText, { color: colors.text }]}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

export default PromoCode

const styles = StyleSheet.create({
    inputPromo: {
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: "77%",
    
        padding: 15,
        marginTop: 10,
      },
      boldText: {
        fontWeight: "bold",
        fontSize: 18,
      },
})