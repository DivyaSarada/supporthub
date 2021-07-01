import React from 'react'

function Td({props}) {
    return (
        props.forEach(element => {
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        })
    )
}

export default Td
