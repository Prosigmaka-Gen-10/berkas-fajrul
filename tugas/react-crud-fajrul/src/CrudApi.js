import axios from 'axios';
import { useEffect, useState } from 'react';



export default function CrudApi() {

    let originForm = {
        city: '',
        salary: '',
        livingCost: ''
    }

    let [suitabilities, setSuitabilities] = useState([])
    let [formInput, setFormInput] = useState({ ...originForm })

    async function getSuitabilityList() {
        try {
            let response = await axios.get('http://localhost:3005/suitabilities')

            console.log(response.data)
            setSuitabilities(response.data)
        } catch (err) {
            console.log(err)
            alert('Something happened when processing data!')
        }

    }

    function handleSubmit(event) {
        event.preventDefault()

        if (formInput.id) {
            updateSuitability()
        } else {
            createSuitability()
        }

        setFormInput({ ...originForm })

    }


    function createSuitability() {
        axios.post('http://localhost:3005/suitabilities', formInput)
            .then(() => {
                getSuitabilityList()
            })
            .catch(err => {
                console.log(err)
                alert('Something happened when processing data!')
            })
    }

    function handleInput(event, propName) {
        let currentFormInput = { ...formInput }
        currentFormInput[propName] = event.target.value
        setFormInput(currentFormInput)
    }

    function prepareUpdate(suitability) {
        setFormInput({ ...suitability })
    }

    function updateSuitability() {
        axios.put('http://localhost:3005/suitabilities/' + formInput.id, formInput)
            .then(() => {
                getSuitabilityList()
            })
            .catch(err => {
                console.log(err)
                alert('Something happened when processing data!')
            })


    }

    function deleteSuitability(suitabilityId) {
        axios.delete('http://localhost:3005/suitabilities/' + suitabilityId)
            .then(() => {
                getSuitabilityList()
            })
            .catch(err => {
                console.log(err)
                alert('Something happened when processing data!')
            })

    }

    useEffect(() => {
        getSuitabilityList()
    }, [])


    return <>

        <form onSubmit={event => handleSubmit(event)}>
            <h2> Form Suitability </h2>

            <label>
                Input Your City:
                <input
                    type="text"
                    value={formInput.city}
                    onChange={event => handleInput(event, 'city')}
                />
            </label>

            <br /> <br />

            <label>
                Input Your Salary:
                <input
                    type="number"
                    value={formInput.salary}
                    onChange={event => handleInput(event, 'salary')}
                />
            </label>

            <br /> <br />

            <label>
                Input Your Living Cost:
                <input
                    type="number"
                    value={formInput.livingCost}
                    onChange={event => handleInput(event, 'livingCost')}
                />
            </label>

            <br /> <br />

            <button>
                Submit
            </button>
        </form>

        <hr /> <hr />
        {/* ============================== List Data ======================== */}
        <h2> List Data </h2>
        <ul>
            {suitabilities.map(suitability =>
                <li key={suitability.id}>
                    {suitability.city} | Rp. {suitability.salary} | Rp. {suitability.livingCost}

                    &nbsp; &nbsp; &nbsp;
                    <button onClick={() => prepareUpdate(suitability)}>
                        Update Data
                    </button>

                    &nbsp; &nbsp; &nbsp;
                    <button onClick={() => deleteSuitability(suitability.id)}>
                        Delete Data
                    </button> 
                </li>
            )}
        </ul>

    </>
}