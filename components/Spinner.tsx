import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'

type Props = {}

const Spinner = (props: Props) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={colors['brand-100']} />
        </View>
    )
}

export default Spinner

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#00000090',
        zIndex: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
})
