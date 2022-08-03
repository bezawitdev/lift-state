function Button(props){


    return(
        <div>
            <button  className="button"     onClick={props.onClick}> Click for GIFs</button>
        </div>
    )
}
export default Button