import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CrudApi () {

    let originForm = {
        city: '',
        salary: '',
        livingCost: ''
    }

    let [suitability, setSuitability] = useState([])

    function getSuitabilityList () {
        let response = axios.get
    }

    return <>
    
    </>
}