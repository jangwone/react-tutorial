import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
export default function WelcomeComponent() {

    const { username } = useParams()

    function callHelloRestApi() {
        console.log('get called')
        
        axios.get('http://localhost:8080/test')
            .then(
                (res) => successfulResponse(res))
            .catch(
                (error) => errorResponse(error))
            .finally(() => console.log('clean up'))
    }

    function successfulResponse(res) {
        console.log(res)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welecome {username}</h1>
            <div className="Welcome">
                Manage Your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloRestApi}>
                    Call hello world
                </button>
            </div>
        </div>
    )
}

