import React from 'react';



export default function Test() {

    //Initialize an Array of Things with useState |  default
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    //on Click ->
        function addItem(){
        //get the setThingsArray function ,
                            // get prevState of Array,
                                                    // => return an new Array with oldValues + new Element, with Number of ArrayLength
            setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length +1}`])
        }
    //for each thing return => <p> Element with value {thing} | Dont Forget to pass KEY !!!!
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        //container mit onClick button
        <div>
            <button onClick={addItem}>Add Thing</button>
            {/*call thingsElements*/}
            {thingsElements}
        </div>
    )
}
