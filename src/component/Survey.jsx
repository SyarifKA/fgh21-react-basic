import React from 'react'

function TabelSurvey() {
    const [data, setData] = React.useState([{
        id: 1,
        name: 'syarif',
        age: '25',
        gender: 'Laki-laki',
        isSmoker: false,
        brand: ['Marlboro', 'Esse', 'Lucky Strike']
    }])

    function dataResponse(event) {
        event.preventDefault()
        const name = event.target.name.value
        const age = event.target.age.value
        const gender = event.target.gender.value
        const isSmoker = event.target.isSmoke.value

        const variant = event.target.variant
        let result = []
        variant.forEach((e) => {
            if (e.checked === true) {
                result.push(e.value)
            }
        })
        const brand = result.join('; ')

        const newData = [...data, 
            {
                id: Math.round(Math.random() * 9999),
                name,
                age,
                gender,
                isSmoker,
                brand
            }
        ]
        setData(newData)
        // console.log(newData)
    }
    

    return (
        <div>
        <form onSubmit={dataResponse}>
                <h1>Form Survey</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name'/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" id='age' name='age'/>
                </div>
                <div>
                    <div>Gender</div>
                    <input type="radio" id='male' name='gender'value='Laki-laki'/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" id='female' name='gender'value='Perempuan'/>
                    <label htmlFor="female">Female</label>
                </div>
                <div>
                    <div>Is Smoker</div>
                    <input type="radio" id='yes' name='isSmoke' value='Ya'/>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" id='no' name='isSmoke' value='Tidak'/>
                    <label htmlFor="no">No</label>
                </div>
                <div>
                    <div>Cigar variant had tried</div>
                    <input type="checkbox" id='marlboro' name='variant' value='marlboro'/>
                    <label htmlFor="marlboro">Marlboro</label>
                    <input type="checkbox" id='luckyStrike' name='variant' value='Lucky Strike'/>
                    <label htmlFor="luckyStrike">Lucky Strike</label>
                    <input type="checkbox" id='esse' name='variant' value='esse'/>
                    <label htmlFor="esse">Esse</label>
                    <input type="checkbox" id='gudangGaram' name='variant' value='Gudang Garam Filter'/>
                    <label htmlFor="gudangGaram">Gudang Garam Filter</label>
                </div>
                <div>
                    <button type='submit'>Save</button>
                </div>
        </form>
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Is Smoker?</th>
                <th>Variant</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => {
                    return (
                        <tr key = {"survey"+item.id}>
                        {/* <tr key = {`survey+${item.id}}> */}
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>{item.isSmoker}</td>
                            <td>{item.brand}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default TabelSurvey