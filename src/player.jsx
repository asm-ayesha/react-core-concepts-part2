

export default function Player({player}){

    const {name,company,address} =player;
    return(
        <div className="card">
            <h4>User Name: {name}</h4>
            <h4>Company Name: {company.name}</h4>
            <h4>city: {address.city}</h4>
        </div>
    )
}