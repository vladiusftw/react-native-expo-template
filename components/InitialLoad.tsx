import { StyleSheet } from 'react-native'
import React from 'react'
import Spinner from './Spinner'
import { useAppSelector } from '../store'

type Props = {
    children: React.ReactNode
}

const InitialLoad = ({ children }: Props) => {
    const { isLoading } = useAppSelector((state) => state.normal.loading)

    return (
        <>
            {isLoading && <Spinner />}
            {children}
        </>
    )
}

export default InitialLoad

const styles = StyleSheet.create({})
