type CardType = {
    name: string;
    age?: number;
    nickname?: string;
};

const Card = ({ name,age,nickname }: CardType) => {
    return (
        <div>
            {name} {age} {nickname}
            
        </div>
    )
};

export default Card;