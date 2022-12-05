import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
        <h1>{ title }</h1>
        <Button 
        color={showAdd ? 'red' : 'rgb(18,15,82)'}
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}
        />
        
      
    </header>
    
  )
}

Header.defaultProps = {
    title: 'Make a Plan to Vote',
   
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
   
}

//you can style stuff inline with variables if you want to
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header