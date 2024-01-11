import React from 'react'
import { Action } from './redux/Action'
import { connect } from 'react-redux'

function CakeShop(props) {
    // console.log(props);
  return (
    <div>
        <div className='text-center'>number of Cake {props.numofCake}</div>
        <div className='text-center'><button onClick={props.Action}>order Cake </button></div>
    </div>
  )
}

const mapStateToProps = state => {
    return{
        numofCake : state.numofCake
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        Action : () => dispatch(Action())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeShop)