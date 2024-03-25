import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router'

type Props = {
    color: string
    size: number
}

const CustomToggleButton = (props: Props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
            <Ionicons name="menu" {...props} />
        </TouchableOpacity>
    )
}

export default CustomToggleButton

const styles = StyleSheet.create({})
