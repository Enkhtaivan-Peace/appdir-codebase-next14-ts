type ApiError<T> = {
    success:boolean
    message: string
    data?: T
}

export type TError<T> = Partial<T> & ApiError<T>

 class Fetch {
    private readonly BASE_URL: string
    constructor(baseUrl?: string) {
        this.BASE_URL = baseUrl ?? process.env.NEXT_BACKEND_URL!
    }

    private async handleResponse<T>(response: Response): Promise<TRes<T> | TError<T>> {
        if (!response.ok) {
            const errorData: TError<T> = await response.json()
            console.log(errorData.message || 'ямар нэгэн алдаа гарлаа')
            // throw new Error(errorData.message || 'ямар нэгэн алдаа гарлаа')
            return errorData
        }
        const responseData: TRes<T> = await response.json()
        return responseData
    }

    public async get<T>(url: string, token?: string): Promise<TRes<T> | TError<T>> {
        const response = await fetch(this.BASE_URL + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
            },
        })
        return await this.handleResponse<T>(response)
    }

    public async post<T>(url:string, data: T, token?: string): Promise<TRes<T> | TError<T>> {
        const response = await fetch(this.BASE_URL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
            },
            body: JSON.stringify(data),
        })
        return await this.handleResponse<T>(response)
    }

    public async put<T>(url:string, data: T, token?: string): Promise<TRes<T> | TError<T>> {
        const response = await fetch(`${this.BASE_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
            },
            body: JSON.stringify(data),
        })
        return await this.handleResponse<T>(response)
    }

    public async delete<T>(url:string,  id: number, token?: string): Promise<TRes<T> | TError<T>> {
        const response = await fetch(`${this.BASE_URL}${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
            },
        })
        return await this.handleResponse<T>(response)
    }
}

export const fetchApi = new Fetch()
export default Fetch