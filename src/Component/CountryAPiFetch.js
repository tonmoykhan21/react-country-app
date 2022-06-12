import React, { useState, useEffect } from 'react'
import Navigation from '../Router/Navigation';

import Country from './Country';

const url = "https://restcountries.com/v3.1/all"

const CountryAPiFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [filterCountry, setFilterCountry] = useState(data);


    const fetchApi = (url) => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("APi is not Set");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setFilterCountry(data);
                setLoading(false);

            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchApi(url);

    }, [url])


    const HandleRemoveCountry = (name) => {
        var filter = filterCountry.filter((data) => {
            return (data.name.common !== name)
        })
        setFilterCountry(filter);
    }

    const searchHandeler = (searchtext) => {
        var value = searchtext.toLowerCase();
        var newCountry = data.filter((data) => {
            const countryName = data.name.common.toLowerCase();
            return (countryName.startsWith(value))
        })
        setFilterCountry(newCountry);

    }
    return (
        <div>
            <Navigation searchbarHandeler={searchHandeler} />
            {loading && <p>Please Wait For Api Loading</p>}
            {error && <p>{error.message}</p>}
            <Country data={filterCountry} removeCountry={HandleRemoveCountry} />
        </div>
    )
}

export default CountryAPiFetch;