import { useState } from "react";

export default function FormHandling() {
    let [name, setName] = useState()
    let [age, setAge] = useState()
    let [gender, setGender] = useState()
    let [color, setColor] = useState()

    function handleName(eventName) {
        setName(eventName.target.value)
    }

    function handleGender(eventGender) {
        setGender(eventGender.target.value)
    }

    function handleColor(eventColor) {
        setColor(eventColor.target.value)
    }

    function handleSubmit() {
        let payload = {
            myNameIs: name,
            myAgeIs: age,
            myGenderIs: gender,
            myFavoriteColorIs: color
        }

        console.log(payload)
    }

    return <>
        <label>
            Input Your Name: <br />
            <input type='text' onChange={handleName} />
        </label>

        <br />
        <br />

        <label>
            Input Your Age: <br />
            <input type='number' onChange={event => setAge(event.target.value)} />
        </label>

        <br />
        <br />

        <label>
            Choose Your Gender: <br />
            <input type='radio' value='l' name='gender'
                onChange={handleGender}
                checked={gender == 'l' ? true : false} />
            Laki-laki
        </label>
        &nbsp;&nbsp;
        <label>
            <input type='radio' value='p' name='gender'
                onChange={handleGender}
                checked={gender == 'p' ? true : false} />
            Perempuan
        </label>

        <br />
        <br />

        <label>
            Choose Your Favorite Color: <br />
            <input type='color' onChange={handleColor} />
        </label>

        <hr />
        <hr />

        <button onClick={handleSubmit}>
            Submit
        </button>

    </>
}