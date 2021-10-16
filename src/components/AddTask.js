import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text"
                    placeholder="Add Task"
                    value={text}
                    //when you start to type, onChange is a controlled component that gets fired off
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Day and Time</label>
                <input
                    type="text"
                    placeholder="Add Day and Time"
                    value={day}
                    //when you start to type, onChange is a controlled component that gets fired off
                    onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={ reminder }
                    value={reminder}
                    //when you start to type, onChange is a controlled component that gets fired off
                    onChange={(e) => setReminder(e.target.checked)}
                />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
