import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type IUser = {
    name: string;
    email: string;
}

interface UserState {
    user: IUser;
    profilePhoto?: string
}


const initialState: UserState = {
    user: {name: '', email: ''},
    profilePhoto: ''
}


const userSlice = createSlice ({name: 'user', initialState, reducers:{
    setNameAndEmail(state, action:PayloadAction<IUser>) {
        state.user = action.payload
    },
    setUserAvatar(state, action: PayloadAction<string>) {
        state.profilePhoto = action.payload
    }
}})




 export const {setNameAndEmail, setUserAvatar} = userSlice.actions

 export default userSlice.reducer