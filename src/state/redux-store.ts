import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from 'redux-thunk';
import {actionsLoginType, loginReducer} from "../components/Login/login-reducer";
import {
    actionsPasswordRecoveryType,
    passwordRecoveryReducer
} from "../components/PasswordRecovery/password-recovery-reducer";
import {
    actionsNewPasswordType,
    enterNewPasswordReducer
} from "../components/EnterNewPassword/enter-new-password-reducer";
import {actionsProfileType, profileReducer} from "../components/Profile/profile-reducer";
import {actionsRegistrationType, registrationReducer} from "../components/Registration/registration-reducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    PasswordRecovery: passwordRecoveryReducer,
    newPassword: enterNewPasswordReducer,
    profile: profileReducer,
    registration: registrationReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

type AppActionsType = actionsNewPasswordType
    | actionsLoginType
    | actionsPasswordRecoveryType
    | actionsProfileType
    | actionsRegistrationType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppActionsType>

export const store = createStore(rootReducer, applyMiddleware(thunk))