import {useContext} from 'react'
import UserConnected from '../../context/UserConnected'


export default function Home() {

const {userConnected, setUserConnected} = useContext(UserConnected);

// const foo = () =>{

//     setUserConnected(!userConnected);
// }
    
    return(
        <div>

            {userConnected ?<div>
                 <p>user  Connected</p>
            </div>
            :
            <div>
                <p>user not Connected</p>
            </div>}
            {/* <button onClick={foo}>connect/disconnect</button> */}

        </div>
    )
}