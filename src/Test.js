import { useEffect } from "react"

export default function Test() {

    useEffect(() => {
        console.log('Component İlk Yüklendiğinde Çalışır')
    },[])

    useEffect(() =>{
        console.log('Component Render Oldu!')
    })


    return (
        <div>
            Test Komponenti
        </div>
    )
}