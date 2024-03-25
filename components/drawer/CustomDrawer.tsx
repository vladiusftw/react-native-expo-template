import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer'
import { colors, routes } from '../../constants'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Image } from 'expo-image'

const CustomDrawer = (props: DrawerContentComponentProps) => {
    const currScreenIndex = props.state.index

    return (
        <DrawerContentScrollView
            style={{
                backgroundColor: colors['brand-200'],
                paddingRight: wp(6),
            }}
        >
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <View style={{ marginTop: hp(6) }}>
                {props.state.routeNames.map((route, index) => {
                    return (
                        <React.Fragment key={route}>
                            <TouchableOpacity
                                style={[
                                    styles.item,
                                    currScreenIndex == index &&
                                        styles.activeItem,
                                ]}
                                onPress={() => props.navigation.navigate(route)}
                            >
                                <Text
                                    style={[
                                        styles.label,
                                        currScreenIndex == index &&
                                            styles.activeLabel,
                                    ]}
                                >
                                    {routes[route] ?? route}
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.line} />
                        </React.Fragment>
                    )
                })}
            </View>
            {/* <TouchableOpacity style={styles.button} onPress={onLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity> */}
        </DrawerContentScrollView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    line: {
        width: wp(48),
        height: 2,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginVertical: hp(1),
    },
    label: {
        fontFamily: 'Poppins_500Medium',
        fontSize: hp(2),
        paddingLeft: wp(6),
        color: 'white',
    },
    activeLabel: {
        color: colors['brand-100'],
    },
    item: {
        paddingVertical: hp(1),
    },
    activeItem: {
        backgroundColor: colors.bg,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    logo: {
        width: hp(8),
        height: hp(8),
        borderRadius: 10,
        marginLeft: wp(6),
        marginTop: hp(2),
    },
    button: {
        backgroundColor: '#85CCE6',
        borderRadius: 100,
        width: wp(40),
        height: hp(6),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#95adfe',
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.0,
        elevation: 24,
        alignSelf: 'center',
        marginTop: hp(2),
    },
    buttonText: {
        color: '#E6F7FD',
        fontFamily: 'Poppins_700Bold',
        fontSize: hp(1.8),
    },
})
