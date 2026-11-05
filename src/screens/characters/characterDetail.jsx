import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { screenStyle } from '../../styles/screensStyle'
import { useEffect } from 'react'
import Spinner from '../../components/UI/spinner'
import { statusTypes } from '../../utils/constans'
import { getSingleCharacter,resetdata } from '../../store/actions/charactersAction'
import React from 'react'

const CharacterDetail = () => {
  return (
    <View>
      <Text>characterDetail</Text>
    </View>
  )
}

export default CharacterDetail

const styles = StyleSheet.create({})