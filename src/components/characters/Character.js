function Character(props) {
    const {character} = props;

    return (
        <div>
            <h3>{character.id} -- {character.name}</h3>
            <p>{character.status}</p>
        </div>
    );
}

export default Character;