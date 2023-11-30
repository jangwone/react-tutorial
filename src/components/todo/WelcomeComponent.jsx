import { useParams, Link } from 'react-router-dom'

export default function WelcomeComponent() {

    const { username } = useParams()

    console.log(username)

    return (
        <div className="WelcomeComponent">
            <h1>Welecome {username}</h1>
            <div className="Welcome">
                Manage Your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}

