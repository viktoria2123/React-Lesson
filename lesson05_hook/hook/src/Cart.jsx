export default function CartRick({ item }) {
    return (
        <div className='cart'>
            <h2>{item.name}</h2>
            <img src={item.image} alt="" width="200" />
            <h5>{item.species}</h5>
        </div>
    )
} 