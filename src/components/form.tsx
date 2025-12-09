import { CheckIcon, PlusIcon } from '@radix-ui/react-icons'
import { Checkbox, Form } from 'radix-ui'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type NewTaskFormProps = {
    onAdd: (title: string, completed: boolean) => void
}

export default function NewTaskForm({ onAdd }: NewTaskFormProps) {
    const [title, setTitle] = useState('')
    const [completed, setCompleted] = useState(false)
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (!title.trim()) return
        onAdd(title, completed)
        setTitle('')
        setCompleted(false)
    }
    return (
        <Form.Root onSubmit={handleSubmit} className="mt-2 md:mt-3">
            <Form.Field name="item">
                <div className="bg-white flex items-center p-3 gap-2 rounded-xl">
                    <Checkbox.Root
                        checked={completed}
                        onCheckedChange={(checked) => setCompleted(!!checked)}
                        className="flex w-5 h-5 appearance-none items-center justify-center rounded-full border shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px_black]"
                    >
                        <Checkbox.Indicator>
                            <CheckIcon></CheckIcon>
                        </Checkbox.Indicator>
                    </Checkbox.Root>

                    <Form.Control
                        type="text"
                        required
                        autoFocus
                        onChange={handleChange}
                        value={title}
                        className="flex-1"
                        autoComplete="off"
                    ></Form.Control>
                    <Form.Submit className="border p-2">
                        <PlusIcon className="w-5 h-5"></PlusIcon>
                    </Form.Submit>
                </div>
                <Form.Label className="p-2 block text-center">
                    What do you need to do?
                </Form.Label>
            </Form.Field>
        </Form.Root>
    )
}
