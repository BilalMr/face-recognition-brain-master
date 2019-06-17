import React,{Component} from 'react'

class FaceRecongnition extends Component{
    render(){
        return(
            <div className='center ma'>
                <div className='absolute mt2'>
                 <img src={this.props.imageUrl} width='500px' height='auto' alt=''/>
                </div>
            </div>
        )
    }
}

export default FaceRecongnition