import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type CredentialState = {
    phone: string
}

const initialState: CredentialState = {
    phone: '',
}

export const credentialSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload
        },
    },
})

export const { setPhone } = credentialSlice.actions

export default credentialSlice.reducer
