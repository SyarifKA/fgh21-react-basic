import React from 'react'

function TabelSurvey() {
    const [data, setData] = React.useState([{
        id: 1,
        name: 'syarif',
        age: '25',
        gender: 'Male',
        isSmoker: 'Yes',
        brand: ['Marlboro', 'Esse', 'Lucky Strike']
    }])

    function dataResponse(event) {
        event.preventDefault()
        const name = event.target.name.value
        const age = event.target.age.value
        const gender = event.target.gender.value
        const smoke = event.target.isSmoke.item(0)
        let isSmoke = false
        if (smoke.checked) {
            isSmoke = smoke.value
        }

        const variant = event.target.variant
        let result = []
        variant.forEach((e) => {
            if (e.checked) {
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
                isSmoke,
                brand
            }
        ]
        setData(newData)
    }
    

    return (
        <div className='survey'>
        <h1>Form Survey</h1>
        <form onSubmit={dataResponse} className='form-survey'>
                <div>
                    <label htmlFor="name">Name</label>
                    <div>
                    <input type="text" id='name' name='name'/>
                    </div>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <div>
                    <input type="number" id='age' name='age'/>
                    </div>
                </div>
                <div>
                    <div>Gender</div>
                    <div>
                    <input type="radio" id='male' name='gender'value='Male'/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" id='female' name='gender'value='Female'/>
                    <label htmlFor="female">Female</label>
                    </div>
                </div>
                <div>
                    <div>Is Smoker</div>
                    <div>
                    <input type="radio" id='yes' name='isSmoke' value='Yes'/>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" id='no' name='isSmoke' value='No'/>
                    <label htmlFor="no">No</label>
                    </div>
                </div>
                <div>
                    <div>Cigar variant had tried</div>
                    <div>
                    <input type="checkbox" id='marlboro' name='variant' value='marlboro'/>
                    <label htmlFor="marlboro">Marlboro</label>
                    </div>
                    <div>
                    <input type="checkbox" id='luckyStrike' name='variant' value='Lucky Strike'/>
                    <label htmlFor="luckyStrike">Lucky Strike</label>
                    </div>
                    <div>
                    <input type="checkbox" id='esse' name='variant' value='esse'/>
                    <label htmlFor="esse">Esse</label>
                    </div>
                    <div>
                    <input type="checkbox" id='gudangGaram' name='variant' value='Gudang Garam Filter'/>
                    <label htmlFor="gudangGaram">Gudang Garam Filter</label>
                    </div>
                </div>
                <div>
                    <button type='submit'>Save</button>
                </div>
        </form>
        <table className='table-survey'>
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