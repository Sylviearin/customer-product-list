//Base imports
import React, {useEffect, useState} from 'react';

// Styles import
import './styles.scss';
import {useDispatch} from "react-redux";
import {productsSortByCount, productsSortByName} from "../../../store/reducers/public/products";


export const SortPanel: React.FC = () => {

    const dispatch = useDispatch();
    const [sortByCount, setSortByCount] = useState(false);
    const [sortByName, setSortByName] = useState(false);

    useEffect(() => {
        dispatch(productsSortByCount(sortByCount))
    }, [sortByCount])

    useEffect(() => {
        dispatch(productsSortByName(sortByName))
    }, [sortByName])

    const handleSortByCount = () => {
        setSortByCount(!sortByCount)
    }

    const handleSortByName = () => {
        setSortByName(!sortByName)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <button className="btn btn-primary w-100 bg-transparent text-black" onClick={handleSortByCount}>
                        Sort by count <span className={sortByCount ? "fw-bold sort-by-count" : "fw-bold sort-by-count rotate"}>&#9660;</span>
                    </button>
                </div>
                <div className="col-lg-6">
                    <button className="btn btn-primary w-100 bg-transparent text-black" onClick={handleSortByName}>
                        <span>Sort by name {sortByName ? "(z-A)" : "(A-z)"}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
