declare type JsxChildren = {
    children: JSX.Element[] | JSX.Element | React.ReactNode | string
}

declare type TMENU = {
    text: string
    href: string
}

declare type TButton = {
    onClick: (e?: any) => any
    text?: string
    isActive?: boolean
}

declare type TFormElement = {
    name: string
    placeholder?: string
    required?: boolean
    value?: string
    className?: string
    onChange?: (e: any, isCheckbox?: boolean) => void
    onClick?: () => void
}

declare type TError = {
    response: {
        status: number
    }
}

declare type TShape = {
    width: number
    height: number
}

declare type TCrud = {
    type: 'ADD' | 'DELETE' | 'EDIT' | 'GET'
}

declare type TPaginatedState<T> = {
    data: T
    success?: boolean
    paginate?: IPaginate
}

declare interface Window {
    ethereum?: any
}

declare type TScroll = {
    scrollWidth: number
    scrollHeight: number
}
