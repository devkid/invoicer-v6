//Packages, Modules
import React, { useMemo } from 'react';
import useFetch from './api/useFetch.ts';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.css';
import { selectSwitchMode } from './redux-modules/switchMode/switchModeSelector';
import { switchMode } from './redux-modules/switchMode/switchModeSlice';
//Components
import Header from './Components/app/Header/Header';
import Footer from './Components/app/Footer/Footer';
import { useGetDbApiQuery } from './api/db.ts';


export default function App(props) {
    console.log('apps props', props)

    // STORE
    // const dispatch = useDispatch();
    const showInvoice = useSelector(selectSwitchMode);
    // console.log('showInvoice',switchMode.showInvoice)

    // memoized date function (only renders once)
    const memoDate = useMemo(() => new Date(), []).toLocaleDateString()

    const handlePrint = () => {
        window.print()
    }
    const handleDownload = () => {
        console.log("handleDownload")
    }

    // const { data , loading, error, refetch } = useFetch(useGetDbApiQuery);
    const { data: joke, loading, error, refetch } = useFetch('useGetDbApiQuery');

    console.log('data app', joke)

    if (loading)
        return <h1> Loading...</h1>

    if (error)
        console.log('error', error)



    if (loading)
        return <h1> Loading...</h1>

    if (error)
        console.log(error)

    return (
        <div>
        { joke ? (
            <h1>
                {joke.setup} answer: {joke.delivery}
            </h1>
        ) :(
            <h1>
                SORRY 
            </h1>
        )

        }
            <button onClick={refetch}>Refetch</button>
                
        </div>
    )
}