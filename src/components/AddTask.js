import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add a task')
            return
        }
        onAdd({ text, day, reminder })

        setText('')
        setDay ('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Plan</label>
            <input 
            type='text'
            placeholder='Add Plan'
            value={text}
            onChange={(e) => setText(e.target.value)} >
            </input>
        </div>
        <div className='form-control'>
            <label>Day</label>
            <input 
            type="text" 
            placeholder='Add Day You Plan to Get it Done'
            value={day}
            onChange={(e) => setDay(e.target.value)} >
                </input>
        </div>   
        <div className='form-control form-control-check'>
            <label>Mark as important (yellow on left)</label>
            <input 
            type="checkbox" 
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value='Save Additional Plan' className="btn btn-block" >

        </input>
    </form>
  )
}

export default AddTask