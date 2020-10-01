

export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}

export const SET_COLLAPSED ='SET_COLLAPSED'

 export const reducer =(state:StateType, action:ActionType):StateType => {
    switch(action.type) {
        case SET_COLLAPSED:
        const stateCopy ={
            ...state, //создаем копию обьекта
            collapsed:!state.collapsed //перетираем у него только эту функцию
        };
        return stateCopy
        default: throw new Error("Bad action type") //генерирует ошибку
    }
    return state
}