import { useEffect, useState } from "react"
import { useRef } from "react"

export default function Test() {

    const [postID, setPostID] = useState(1)
    const [post, setPost] = useState(false)
    const yaziRef = useRef()
    const focusYazi = () => {
        yaziRef.current.focus()
    }
    useEffect(() => {
        console.log('Component İlk Yüklendiğinde Çalışır')
        return() => {
            console.log('Component Destroyed')
        }
    },[])

    useEffect(() =>{
        fetch(`https://www.youtube.com/${postID}`)/*Link Eklenicek*/
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postID])

    /*
    useEffect(() =>{
        console.log('Component Render Oldu!')
    })
    */

    return (
        <div>
            <input ref={yaziRef}></input>
            <h3>{postID}</h3>
            {post && JSON.stringify(post)}
            <button onClick={() => setPostID(postID => postID + 1)}>Arttır</button>
            <button onClick={focusYazi}>Odakla</button>
            <hr></hr>
            Test Komponenti
        </div>
    )
}