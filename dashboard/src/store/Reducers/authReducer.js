import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import api from '../../api/api';

// admin login
export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info, { rejectWithValue, fulfillWithValue }) => { // info er vitore AdminLogin.jsx file er state gulo add hocce
        try {
            console.log(info);
            const { data } = await api.post('/admin-login', info,
                { withCredentials: true });
            localStorage.setItem('accessToken', data.token);
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// seller register
export const seller_register = createAsyncThunk(
    'auth/seller_register',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            console.log(info);
            const { data } = await api.post('/seller-register', info, { withCredentials: true });
            localStorage.setItem('accessToken', data.token);
            return fulfillWithValue(data);
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data);
        }
    }
);

// seller login
export const seller_login = createAsyncThunk(
    'auth/seller_login',
    async (info, { rejectWithValue, fulfillWithValue }) => { // info er vitore AdminLogin.jsx file er state gulo add hocce
        try {
            console.log(info);
            const { data } = await api.post('/seller-login', info,
                { withCredentials: true });
            localStorage.setItem('accessToken', data.token);
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// get user info
export const get_user_info = createAsyncThunk(
    'auth/get_user_info',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get('/get-user', { withCredentials: true });
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// return role
const returnRole = (token) => {
    if (token) {
        const decodeToken = jwtDecode(token);
        const expireTime = new Date(decodeToken.exp * 1000);
        if (new Date() > expireTime) {
            localStorage.removeItem('accessToken');
            return '';
        } else {
            return decodeToken.role;
        }
    } else {
        return '';
    }
};


export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: '',
        role: returnRole(localStorage.getItem("accessToken")),
        token: localStorage.getItem("accessToken"),
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder
            //admin login
            .addCase(admin_login.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(admin_login.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(admin_login.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
            })

            //seller register
            .addCase(seller_register.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(seller_register.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(seller_register.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
            })

            //seller login
            .addCase(seller_login.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(seller_login.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(seller_login.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
            })

            // get user info
            .addCase(get_user_info.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.userInfo = payload.userInfo;
            });
    }
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;