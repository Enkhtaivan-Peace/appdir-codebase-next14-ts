'use server'

import { TError } from "a/common/fetch/fetchCrud"
import { IUser } from "./_interfaces"
import { userService } from "./userService"

export async function getUserList(payload: TListReq) {
    const userListRes: TRes<IUser[]> | TError<IUser> = await userService.fetchUsers(payload)
    return userListRes
}