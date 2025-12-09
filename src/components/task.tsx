import {
    CheckIcon,
    Cross2Icon,
    Pencil1Icon,
    Pencil2Icon,
    TrashIcon,
} from '@radix-ui/react-icons'
import { Checkbox, Label, Tooltip, Dialog } from 'radix-ui'
import type { TaskType } from '../data/tasks'
import { useState } from 'react'

type TaskProps = TaskType & {
    onToggle: (id: string) => void
    onDelete: (id: string) => void
    onEdit: (id: string, newTitle: string) => void
}

type EditTaskDialogProps = {
    id: string
    title: string
    onEdit: (id: string, newTitle: string) => void
}

function EditTaskDialog({ id, title, onEdit }: EditTaskDialogProps) {
    const [newTitle, setNewTitle] = useState(title)

    function handleSave() {
        onEdit(id, newTitle)
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="p-2">
                    <Pencil2Icon className="w-5 h-5"></Pencil2Icon>
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Title>Edit task</Dialog.Title>

                    <input
                        className="Input"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />

                    <Dialog.Close asChild>
                        <button onClick={handleSave}>Save</button>
                    </Dialog.Close>

                    <Dialog.Close asChild>
                        <button aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default function Task({
    title,
    completed = false,
    id,
    onToggle,
    onDelete,
    onEdit,
}: TaskProps) {
    return (
        <li className="bg-white flex items-center p-3 gap-2 rounded-xl">
            <Checkbox.Root
                id={id}
                checked={completed}
                onCheckedChange={() => onToggle(id)}
                className="flex w-5 h-5 appearance-none items-center justify-center rounded-full border shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px_black]"
            >
                <Checkbox.Indicator>
                    <CheckIcon></CheckIcon>
                </Checkbox.Indicator>
            </Checkbox.Root>
            <Label.Root htmlFor={id} className="mr-auto">
                {title}
            </Label.Root>
            <EditTaskDialog
                id={id}
                title={title}
                onEdit={onEdit}
                ></EditTaskDialog>
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger
                            onClick={() => onDelete(id)}
                            className="p-2"
                        >
                            <TrashIcon className="w-5 h-5"></TrashIcon>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Content>
                                Delete item
                                <Tooltip.Arrow />
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </Tooltip.Provider>
        </li>
    )
}
