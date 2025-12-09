import { Dialog } from 'radix-ui'
import { useState, type ChangeEvent, type FormEvent } from 'react'

type NewTaskDialogProps = {
    onAdd: (title: string, completed: boolean) => void
}

export default function NewTaskDialog({ onAdd }: NewTaskDialogProps) {
    const [title, setTitle] = useState('')

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (!title.trim()) return
        onAdd(title, false)
        setTitle('')
    }

    return (
        <Dialog.Root>
            {/* Trigger button */}
            <Dialog.Trigger className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 fixed bottom-4 left-1/2 -translate-x-1/2">
                Add Task
            </Dialog.Trigger>

            {/* Overlay */}
            <Dialog.Overlay className="fixed inset-0 bg-black/30" />

            {/* Modal content */}
            <Dialog.Content className="fixed top-1/2 left-1/2 w-80 p-6 bg-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2">
                <Dialog.Title className="text-lg font-semibold mb-4">
                    New Task
                </Dialog.Title>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                >
                    <input
                        type="text"
                        placeholder="What do you need to do?"
                        required
                        value={title}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <div className="flex justify-end space-x-2">
                        <Dialog.Close className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">
                            Cancel
                        </Dialog.Close>
                        <button
                            type="submit"
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}
