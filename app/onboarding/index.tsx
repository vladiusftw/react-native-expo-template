import React from 'react'
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
} from 'react-native'
import { colors } from '../../constants'

type Props = {}

const OnBoarding = (props: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>onboarding</Text>
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg, // Replace with your background color
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
})
