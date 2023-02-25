import React, { useState, useEffect } from 'react'

import useFeatch from 'react-fetch-hook'
import CartRick from './component/Cart'
import './style.css'

export default function RickAndMorty() {

    // let arr1 = ['Sasha', 'Sveta']
    // let arr2 = ['Sasha2', 'Sveta3']

    // let res = [...arr1, ...arr2]

    // console.log(res);


    const { isLoading, data } = useFeatch('https://rickandmortyapi.com/api/character?page=2')
    const [out, setOut] = useState()
    const [option, setOption] = useState([])

    // console.log(data?.results);


    useEffect(() => {
        //species
        let Option = []
        data?.results.forEach(item => Option.push(item.species))
        let newOption = new Set(Option)

        setOption([...newOption])

        setOut(data?.results)
    }, [data?.results])


    let inpValue = React.createRef()

    function changeState() {
        let searchRick = []
        
        data?.results.map(item => {
            let LowName = item.name.toLowerCase();
            item.name === inpValue.current.value && searchRick.push(item)
            LowName.indexOf(inpValue.current.value)>=0 && searchRick.push(item)
    })
        setOut(searchRick)
        // console.log(inpValue.current.value);
    }


    function selectChange(event) {

        let newOptionRick = []
        data?.results.map(item => (
            item.species === event.target.value && newOptionRick.push(item)
        ))

        setOut(newOptionRick)
    }

    return isLoading ? <h1>...isLoading</h1> :
        (

            <section>


                <nav className='rick__nav'>
                    <div className="rick__select-row">
                        <select onChange={selectChange}>
                            {option.map((item, index) => <option key={index}>{item}</option>)}
                        </select>
                    </div>
                    <div className="rick__serc-row">
                        <input type="text" ref={inpValue} /> <button onClick={changeState}>Search</button>
                    </div>
                </nav>

                <div className='carts'>
                    {out?.map(item => <CartRick key={item.id} item={item} />)}
                </div>
            </section>
        )
}