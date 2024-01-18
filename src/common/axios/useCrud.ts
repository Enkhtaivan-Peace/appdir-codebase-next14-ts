import axios from './http'
import useMessageFactory from '../message/useMessageFactory'
import { AxiosResponse } from 'axios'


export interface IPaginate {
    start: number
    end: number
    limit: number
    prevPage: number
    nextPage: number
    pageCount: number
    total: number
}
export interface IRes<T> {
    success: boolean
    data?: T
    reason?: string
    error?: unknown
    statusCode?: number
    paginate?: IPaginate
}

export function useCrud() {
    const { calcMessage } = useMessageFactory()
    const token = null

    async function getData<T>(restUrl: string, isProtected: boolean = false): Promise<IRes<T>> {
        try {
            const response: AxiosResponse<any> = await axios({
                method: 'get',
                url: restUrl,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: isProtected ? `Bearer ${token}` : undefined,
                },
            })
            console.log('bbbb', response)

            return {
                success: true,
                data: response.data.data as T,
                ...(response.data.paginate && { paginate: response.data.paginate }),
            }
        } catch (e: unknown) {
            const error = e as TAxiosError
            const { msg } = calcMessage(error?.response?.status)
            const val = { success: false, reason: msg, statusCode: error?.response?.status }
            return val
        }
    }

    async function postData<T>(restUrl: string, data: unknown, isProtected: boolean = false): Promise<IRes<T>> {
        try {
            const response: AxiosResponse<T> = await axios({
                method: 'post',
                data,
                url: restUrl,
                withCredentials: true,
                headers: {
                    Authorization: isProtected ? `Bearer ${token}` : undefined,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
            })
            return { success: true, data: response.data }
        } catch (e: unknown) {
            const error = e as TAxiosError
            const { msg } = calcMessage(error?.response?.status)
            const val = { success: false, reason: msg, statusCode: error?.response?.status }
            return val
        }
    }

    async function putData<T>(restUrl: string, editedModel: T, isProtected: boolean = false): Promise<IRes<T>> {
        try {
            const response = await axios({
                method: 'put',
                data: editedModel,
                url: restUrl,
                headers: {
                    Authorization: isProtected ? `Bearer ${token}` : undefined,
                },
            })
            const val = { success: true, data: response.data }
            return val
        } catch (e: unknown) {
            const error = e as TAxiosError
            const { msg } = calcMessage(error?.response?.status)
            console.error(e)
            const val = { success: false, reason: msg, statusCode: error?.response?.status }
            return val
        }
    }

    async function deleteData(restUrl: string) {
        const response = await axios({
            method: 'delete',
            url: restUrl,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response.data
    }

    return { getData, postData, putData, deleteData }
}
