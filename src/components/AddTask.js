import { useState } from 'react'
// import Calendar from 'react-calendar'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    // const [value, setValue] = useState(new Date())
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

    // function onChange(nextValue) {
    //     setValue(nextValue);
    // }

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

{/* <div>
<Calendar onChange={onChange} value={value} />
</div> */}

        <div className='form-control form-control-check'>
            <label>Mark as incomplete (double click task when complete)</label>
            <input 
            type="checkbox" 
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value='Save Additional Plan' className="btn btn-block" alt="submit button to input new task in your voting plan">



        </input>
    </form>
   
  )
}

export default AddTask