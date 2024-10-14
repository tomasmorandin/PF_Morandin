
export default function CartElements({item}) {

    return (
        <>
            <div className="description text-center">
            <img src={item.image} alt={item.title}/>
            <h4 className="card-text1">{item.title}</h4>
            <h4 className="card-text1">${item.price}</h4>
            </div>
        </>
    )
}