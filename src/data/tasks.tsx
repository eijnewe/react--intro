export type TaskType = {
    id: string
    title: string
    completed?: boolean
}

export const tasks: TaskType[] = [
    { id: '1', title: 'Buy groceries', completed: false },
    { id: '2', title: 'Clean the room', completed: true },
    { id: '3', title: 'Finish project', completed: false },
]
