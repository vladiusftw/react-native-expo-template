import { jwtDecode } from 'jwt-decode'

type DecodedToken = {
    exp: number
}

export const isTokenExpired = async (token: string) => {
    const decodedToken = jwtDecode<DecodedToken>(token)
    if (!decodedToken || !decodedToken.exp) {
        return true
    }

    const currentTime = Date.now() / 1000

    return decodedToken.exp < currentTime
}
