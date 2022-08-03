function Input(props){
    console.log('props ',props)
    
    const {fun} = props
    console.log('fun',fun)
    
    return(
            <div className="div" >
                <input className= "input"  type= "text" onChange={fun}></input>
                
            </div>
        )
    }
    export default Input;