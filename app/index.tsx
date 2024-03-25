import { StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRootNavigationState, useRouter } from 'expo-router'

type Props = {}

const index = (props: Props) => {
    const rootNavigationState = useRootNavigationState()
    const router = useRouter()

    useLayoutEffect(() => {
        const onStart = async () => {
            if (rootNavigationState?.key) {
                router.replace('/onboarding')
            }
        }
        onStart()
    }, [rootNavigationState])

    return <></>
}

export default index

const styles = StyleSheet.create({})
