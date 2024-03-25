import { StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'
import CustomDrawer from '../../components/drawer/CustomDrawer'

type Props = {}

const _layout = (props: Props) => {
    return (
        <GestureHandlerRootView style={styles.container}>
            <Drawer
                screenOptions={{
                    headerShown: false,
                }}
                drawerContent={(content) => <CustomDrawer {...content} />}
            />
        </GestureHandlerRootView>
    )
}

export default _layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        position: 'relative',
    },
})
