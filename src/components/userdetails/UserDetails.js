import {useLocation} from "react-router-dom";

export default function UserDetails() {
    let location = useLocation();
    console.log(location);
    let {state: user} = location;
    return (
        <div>
            {
                JSON.stringify(user)

            }

        </div>
    );
}
