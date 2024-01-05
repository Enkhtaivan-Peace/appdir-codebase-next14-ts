import dynamic from 'next/dynamic'
const TodoEditPopup = dynamic(() => import('a/features/todo/popup/TodoEditPopup'))

export const POPUP_TYPES = {
    TODO_EDIT: 'TODO_EDIT',
}
export type POPUP_TYPE = (typeof POPUP_TYPES)[keyof typeof POPUP_TYPES]
export type POPUP_COMPONENTS_TYPE = { [key in POPUP_TYPE]: React.ComponentType<any> }

export const POPUP_COMPONENTS: POPUP_COMPONENTS_TYPE = {
    [POPUP_TYPES.TODO_EDIT]: TodoEditPopup,
}
