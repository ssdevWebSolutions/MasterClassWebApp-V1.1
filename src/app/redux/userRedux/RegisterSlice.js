import { createSlice } from '@reduxjs/toolkit';



export const initialUserValidationState={

  UserAuth: false,
  validMobileNumber:false,
  otp:null,
  otpVerified:false,
  loginVerified:false,
  userid:null,
  name:null,
  username:null,
  usermail:null,
  userPhoneNumber:null,
  Message:null
}

const userRegisterSlice = createSlice({
  name: 'user',
  initialState: initialUserValidationState,
  reducers: { 
    registerInitialLoad:(state,action)=>{
      state.UserAuth=false;
      state.loginVerified=false;
      state.Message=null;
    },
    userRegistered: (state, action) => {
      console.log("Action payload", action.payload);
      state.UserAuth = true;
      state.Message = action.payload; // Fix: directly store the message
    },
    registrationFailed: (state, action) => {
      console.log(action.payload)
      state.UserAuth = false;
      state.Message = action.payload; // Store the error message
    },
    loginVerified:(state,action)=>{
      console.log(action.payload, "ikkada"); // this contains message, user, token

      state.loginVerified = true;
      state.Message = action.payload.message;
      
      state.name = action.payload.user.name;
      state.usermail = action.payload.user.mailid;
      state.userPhoneNumber = action.payload.user.mobile_number;
      state.token = action.payload.token;
    
      sessionStorage.setItem('token', action.payload.token);
    

    },
    loginVerificationFailed:(state,action)=>{
      console.log(action.payload)
      state.loginVerified=false;
      state.Message=action.payload;
    }
 
},
});

export const {registerInitialLoad,userRegistered,registrationFailed,loginVerified,loginVerificationFailed} = userRegisterSlice.actions;
export default userRegisterSlice.reducer;
