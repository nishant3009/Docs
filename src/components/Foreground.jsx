import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref1 = useRef(null);

    const data =
    [
        
        {
            desc:  "Complete React within next 2 weeks." ,
            filesize: ".9mb",
            close :true,
            tag: {isOpen: false , tagTitle :"Download Now" , tagColor: "green"}
        },
        {
            desc:  "Upload important files related to work!" ,
            filesize: ".9mb",
            close :true,
            tag: {isOpen: true , tagTitle :"Upload" , tagColor: "blue"}
        },
        {
            desc:  "Documents related to React project." ,
            filesize: "13mb",
            close :false,
            tag: {isOpen: true , tagTitle :"Download Now" , tagColor: "green"}
        }
    ];
  return (
    <div ref={ref1} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((item ,index)=>(
        <Card data={item} reference={ref1} />
        ))}

    </div>
  )
}

export default Foreground