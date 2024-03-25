import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import InitialLoad from './InitialLoad'
import { QueryClientProvider, QueryClient } from 'react-query'
import { usePathname } from 'expo-router'
type Props = {
    children: React.ReactNode
}

const client = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 35 * (60 * 1000), // 30 minutes,
            staleTime: 30 * (60 * 1000),
            refetchOnWindowFocus: false,
        },
    },
})

const Providers = ({ children }: Props) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={client}>
                <InitialLoad>{children}</InitialLoad>
            </QueryClientProvider>
        </Provider>
    )
}

export default Providers

const styles = StyleSheet.create({})
