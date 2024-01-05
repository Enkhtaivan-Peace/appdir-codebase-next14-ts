type ApiError = {
    message: string
}

 class Fetch {
    private readonly BASE_URL: string
    constructor(baseUrl?: string) {
        this.BASE_URL = baseUrl ?? process.env.NEXT_BACKEND_URL!
    }

    private async handleResponse<T>(response: Response): Promise<TRes<T>> {
        if (!response.ok) {
            const errorData: ApiError = await response.json()
            throw new Error(errorData.message || 'ямар нэгэн алдаа гарлаа')
        }
        const responseData: TRes<T> = await response.json()
        return responseData
    }

    public async fetchItems<T>(url: string, token?: string): Promise<TRes<T>> {
        const response = await fetch(this.BASE_URL + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
            },
        })
        return await this.handleResponse<T>(response)
    }

    public async createItem<T>(url:string, data: T, token?: string): Promise<TRes<T>> {
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

    public async updateItem<T>(url:string, data: T, token?: string): Promise<TRes<T>> {
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

    public async deleteItem<T>(url:string,  id: number, token?: string): Promise<TRes<T>> {
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
export default Fetch