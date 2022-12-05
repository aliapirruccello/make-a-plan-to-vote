import PropTypes from 'prop-types'

const Instructions = ({ instructions }) => {

    return (
      <header className='instructions'>
          
          <h2>{ instructions }</h2>
      </header>
    
      
    )
  }
  
 Instructions.defaultProps = {
      instructions: 'Double Click Item to Mark as Complete',
     
  }
 Instructions.propTypes = {
      instructions: PropTypes.string.isRequired,
     
  }




export default Instructions