import Axios from 'axios'
import { isTokenExpired } from './utils'

const axios = Axios.create({
    baseURL: ``,
})

axios.interceptors.request.use((config) => {
    const accessToken =
        config.headers.Authorization?.toString()?.split(' ')?.[1] ?? ''
    if (accessToken !== '') {
        const expired = isTokenExpired(accessToken)
        // do refresh token logic here
        // then set access token back in the config
        // config.headers.Authorization = `Bearer newAccessToken`

        // if refreshToken has error then reset accessToken and refreshToken and redirect back to login screen
    }
    return config
})

axios.interceptors.response.use(
    (config) => {
        return config
    },
    (error) => {
        if (error && error?.response?.status === 401) {
            // remove accessToken & refreshToken as they both have expired in this scenario
            // redirect back to login screen
        }
        return Promise.reject(error)
    }
)
