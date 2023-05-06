import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserService } from "../../../service/user.service";
// import { SaveToken } from "../auth/SessionStorage";

const service = new UserService();

type Data = {
    token: string,
    usernam: string,
}

type TypeLoginUser = {
    error?: string | boolean
    data?: Data
}

export const LoginUser = createAsyncThunk(
    'user/LoginUser',
    async (data: { username: string, password: string }, { dispatch }) => {
        const { username, password } = data;
        dispatch(SetChecking({ checking: true }))

        try {
            const rta: TypeLoginUser = await service.Login(username, password);
            const { error } = { error: false }; /*SaveToken(rta.data?.token || '')*/;

            if (error == true) {
                dispatch(SetChecking({ checking: false }))
                throw new Error("Error");
            }

            dispatch(SetToken(rta.data?.token));
            dispatch(SetChecking({ checking: false }))

            return rta;

        } catch (error) {

            dispatch(SetChecking({ checking: false }))
            throw new Error("Error");
        }

    }
);


export const User = createSlice({
    name: 'user',
    initialState: {
        id: '',
        name: '',
        token: '',
        login: false,
        checking: false,
        error: {
            isUsername: false,
            isPassword: false
        },
    },
    reducers: {
        SetToken: (state, action) => {
            const { token } = action.payload;
            state.token = token;
        },
        SetLogin: (state, action) => {
            const { name, id } = action.payload;

            state.name = name;
            state.id = id;
            state.login = true;
        },
        SetChecking: (state, action) => {
            const { checking } = action.payload;
            state.checking = checking;
        },

    }
})

export const { SetToken, SetLogin, SetChecking } = User.actions;

export default User.reducer;