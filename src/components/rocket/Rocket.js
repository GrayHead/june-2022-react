const Rocket = ({rocket}) => {

    return (
        <div>
            <h2>{rocket.flight_number} -- {rocket.mission_name}</h2>
            <img src={rocket.links.mission_patch_small} alt={rocket.mission_name}/>
        </div>
    )
}
export {Rocket};