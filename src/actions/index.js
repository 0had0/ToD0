export const Types = {
    ADD: 'ADD',
    DEL: 'DEL',
    EDIT: 'EDIT'
}

export const addTodo = item => ({
    type: Types.ADD,
    item
})

export const delTodo = id => ({
    type: Types.DEL,
    id
})

export const editTodo = item => ({
    type: Types.EDIT,
    item
})
