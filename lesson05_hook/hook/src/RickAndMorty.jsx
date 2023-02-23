import useFeatch from 'react-fetch-hook'
import CartRick from './Cart'
import './style.css'

export default function RickAndMorty() {

    // fetch('https://rickandmortyapi.com/api/character?page=2')
    //     .then(data => data.json())
    //     .then(data => console.log(data))

    const { isLoading, data } = useFeatch('https://rickandmortyapi.com/api/character?page=2')

    // console.log(data?.results);

    let RikAndMorty = data?.results.map(item => <CartRick key={item.id} item={item} />)

    return isLoading ? <h1>...isLoading</h1> : <div className='carts'>{RikAndMorty}</div>
}