import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import Filter from './HeaderButtons/Filter'
import Style from '../../Ideas/Style'
import AR from './HeaderButtons/AR'
import Design from './HeaderButtons/Design'
import Color from './HeaderButtons/Color'
import Material from './HeaderButtons/Material'
import Price from './HeaderButtons/Price'

const ShopCategoryHeaderBar = () => {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
  >
     
     <Filter />
     <Style />
     <AR />
     <Design />
     <Color />
     <Material />
     <Price />
    </ScrollView>
  )
}

export default ShopCategoryHeaderBar

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fa807210",
  
  },
});
