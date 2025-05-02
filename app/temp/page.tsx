import React from 'react'

const Temp = (prop:any) => {
  return (
<div>
    
{prop.choosen == "temp 1" &&
    <div>template 1</div>}

{prop.choosen == "temp 2" &&
    <div>template 2</div>}

{prop.choosen == "temp 3" &&
    <div>template 3</div>}

{prop.choosen == "temp 4" &&
    <div>template 4</div>}

</div>
  )
}
export default Temp