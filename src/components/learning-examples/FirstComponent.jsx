//오직하나만 export default 가능
//!!! import 시 중괄호를 사용하지 않으면 무조건 default export component가 보인다.
export default function FirstComponent() {
    return (
        <div class="FirstComponent">First Component</div>
    )
}

export function FifthComponent() {
    return (
        <div class="FifthComponent">Fifth Component</div>
    )
}
