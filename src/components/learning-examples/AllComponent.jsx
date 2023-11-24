import FirstComponent from './FirstComponent';
import FourthComponent from './FourthComponent';
import { FifthComponent } from './FirstComponent';

export default function AllComponent() {
    return (
    <div clssName="App">
        <FirstComponent></FirstComponent>
        <FourthComponent />
        <FifthComponent />
    </div>
    )
}