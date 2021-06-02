const Button = ({clickHandler, children}) => {    
    return (
        <button className="btn btn--primary" onClick={clickHandler}>
            {children ? 'Upvotes' : 'Upvote'} <span className="votes">{children}</span>
        </button>
    )
}

export default Button;