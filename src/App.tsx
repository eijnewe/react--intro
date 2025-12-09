import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/task'
import { tasks as initialTasks, type TaskType } from './data/tasks'
import NewTaskForm from './components/form'
import { ToggleGroup, Toggle, Separator, Dialog, Collapsible } from 'radix-ui'
import {
    CheckCircledIcon,
    ClockIcon,
    Cross2Icon,
    ListBulletIcon,
    MoonIcon,
    PlusIcon,
    RowSpacingIcon,
    SunIcon,
} from '@radix-ui/react-icons'
import { nanoid } from 'nanoid'
import NewTaskDialog from './components/dialog'

/* const [filter, setFilter] = useState('All') */

function getTaskMessage(remaining: number) {
    // Choose color class based on ranges
    let colorClass = 'text-green-500' // 1–5 tasks
    if (remaining >= 6 && remaining <= 10) colorClass = 'text-lime-500'
    if (remaining >= 11 && remaining <= 15) colorClass = 'text-yellow-400'
    if (remaining >= 16 && remaining <= 20) colorClass = 'text-amber-500'
    if (remaining >= 21 && remaining <= 30) colorClass = 'text-orange-500'
    if (remaining > 30) colorClass = 'text-red-500'

    const number = (
        <span className={`font-bold text-lg ${colorClass}`}>{remaining}</span>
    )

    if (remaining === 0)
        return <>All done! You’re basically a productivity superhero! 🦸</>
    if (remaining === 1)
        return <>Just {number} task left… the final boss awaits!</>
    if (remaining === 2)
        return <>Just {number} tasks… double trouble, double fun!</>
    if (remaining === 3) return <>Just {number} tasks… triple the excitement!</>
    if (remaining === 4)
        return <>Just {number} tasks… for-tunately you can handle it!</>
    if (remaining === 5)
        return <>Just {number} tasks… high five for making it this far!</>
    if (remaining <= 10)
        return <>Just {number} tasks… almost in single digits, keep going!</>
    if (remaining <= 20)
        return <>Just {number} tasks… the procrastination saga continues!</>
    if (remaining <= 50)
        return <>Just {number} tasks… you might need a coffee IV drip ☕</>
    return (
        <>Just {number} tasks… it’s officially a to-do tower! Good luck! 🏰</>
    )
}

const FILTERS = [
    {
        value: 'all',
        label: 'All',
        icon: ListBulletIcon,
        bgColor: 'bg-blue-100',
    },
    {
        value: 'active',
        label: 'Active',
        icon: ClockIcon,
        bgColor: 'bg-red-100',
    },
    {
        value: 'completed',
        label: 'Completed',
        icon: CheckCircledIcon,
        bgColor: 'bg-green-100',
    },
] as const

function App() {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)
    const [tasks, setTasks] = useState<TaskType[]>(initialTasks)

    const toggleTask = (id: string) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        )
    }

    function addTask(title: string, completed: boolean) {
        const newTask: TaskType = {
            id: nanoid(),
            title,
            completed,
        }
        setTasks([...tasks, newTask])
    }

    function deleteTask(id: string) {
        const remainingTasks = tasks.filter((task) => id !== task.id)
        setTasks(remainingTasks)
        console.log(id)
    }

    function editTask(id: string, newTitle: string) {
        const editedTaskList = tasks.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // Copy the task and update its name
                return { ...task, title: newTitle }
            }
            // Return the original task if it's not the edited task
            return task
        })
        setTasks(editedTaskList)
    }

    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

    const FILTER_MAP = {
        all: () => true,
        active: (task: TaskType) => !task.completed,
        completed: (task: TaskType) => task.completed,
    } as const

    const filteredTasks = tasks.filter(FILTER_MAP[filter])

    const taskList = filteredTasks.map((task) => (
        <Task
            key={task.id}
            {...task}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
        />
    ))
    const remainingCount = tasks.filter((t) => !t.completed).length
    return (
        <>
            <header className="bg-white flex flex-wrap p-4 md:p-6 items-center justify-between">
                <div>
                    <h1 className="text-2xl font-extrabold">My ToDo List</h1>
                    <p>{getTaskMessage(remainingCount)}</p>
                </div>
                <Toggle.Root className="p-2 rounded data-[state=on]:bg-violet6 data-[state=on]:text-violet12 border">
                    <MoonIcon className="w-5 h-5"></MoonIcon>
                    {/*   <SunIcon></SunIcon> */}
                </Toggle.Root>
                <Separator.Root className="bg-black h-px basis-full"></Separator.Root>
            </header>

            <main className="p-4 md:p-6 flex flex-col md:flex-row gap-4 flex-1">
                <ToggleGroup.Root
                    type="single"
                    value={filter}
                    onValueChange={(value) =>
                        value &&
                        setFilter(value as 'all' | 'active' | 'completed')
                    }
                    className="flex md:flex-col font-bold gap-2 md:gap-3 md:self-start"
                >
                    {FILTERS.map(({ value, label, icon: Icon, bgColor }) => (
                        <ToggleGroup.Item
                            key={value}
                            value={value}
                            className="ToggleGroupItem flex-1 p-2 border bg-white rounded-xl"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <div
                                    className={`${bgColor} flex justify-center items-center p-2`}
                                >
                                    <Icon className="w-5 h-5" />
                                </div>
                                <p className="text-2xl px-2">
                                    {value === 'all' && tasks.length}
                                    {value === 'active' &&
                                        tasks.filter((t) => !t.completed)
                                            .length}
                                    {value === 'completed' &&
                                        tasks.filter((t) => t.completed).length}
                                </p>
                            </div>
                            <p className="text-start px-2">{label}</p>
                        </ToggleGroup.Item>
                    ))}
                </ToggleGroup.Root>
                <Collapsible.Root
                    open={open}
                    onOpenChange={setOpen}
                    className="flex-1"
                >
                    <ul className="flex flex-col gap-2 md:gap-3">{taskList}</ul>

                    <Collapsible.Content asChild>
                        <NewTaskForm onAdd={addTask}></NewTaskForm>
                    </Collapsible.Content>
                    <Collapsible.Trigger className="h-1/4 w-full opacity-0 hover:opacity-100">
                        {open ? 'Abort mission' : 'Click to create a new task'}

                        {/*   <button className="inline-flex size-[25px] items-center justify-center rounded-full text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=closed]:bg-white data-[state=open]:bg-violet3">
                            {open ? <Cross2Icon /> : <RowSpacingIcon />}
                        </button> */}
                    </Collapsible.Trigger>
                </Collapsible.Root>
                <NewTaskDialog onAdd={addTask}></NewTaskDialog>
            </main>
        </>
    )
}

export default App
