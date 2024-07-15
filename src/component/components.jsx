import React from 'react'

function Counter() {
    const [numb, setNumb] = React.useState(0);

    return (
        <div className = 'container'>
            <div>
                <button type='button' onClick={() => {
                    if (numb !== 0) {
                        setNumb(numb - 1)
                    }  
                }}>-</button>
            </div>
            <div>{numb}</div>
            <div>
                <button type='button' onClick={() => {
                    if (numb !== 10) {
                        setNumb(numb + 1)
                    }  
                }}>+</button>
            </div>
        </div>
    )
}

export default Counter