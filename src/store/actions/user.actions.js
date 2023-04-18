import { userService } from "../../services/user.service"
import { SET_USER , SPEND_BALANCE } from "../reducers/user.reducer"

export function spendBalance(contact , amount) {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: SPEND_BALANCE, amount})
            const user = userService.addMove(amount , contact)
            dispatch({ type: SET_USER, user})
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function deposit(amount) {
    return async (dispatch, getState) => {
        try {
            userService.addMove(amount)
            const user = userService.deposit(amount)
            dispatch({ type: SET_USER, user})
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function signup(name) {
    return async (dispatch, getState) => {
        try {
            const user = userService.signup(name)
            dispatch({ type: SET_USER, user})
        } catch (error) {
            console.log('error:', error)
        }
    }
}