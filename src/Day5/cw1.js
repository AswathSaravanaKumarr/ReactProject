import React from 'react'
function Demo(props){
    return(
        <div>
            my name is {props.name}
        </div>
    )
}
export default function List() {
    const list=["mango","orange","apple"];
  return (
    <div>
        {list.map((mamu)=>
            <Demo name={mamu}/>
        )}
    </div>
  )
}