export default function ANHome(props) {
    return(
        <button>
            <a href="#" onClick={() => props.pages('exhibits')}> Enter the museum </a>
        </button>
    )
}