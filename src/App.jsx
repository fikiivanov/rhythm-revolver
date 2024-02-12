
import { useEffect } from 'react';
import './App.css';
import { BsArrowRepeat, BsArrowUpSquare, BsBadgeVr } from "react-icons/bs";

function App() {

    useEffect(() => {
        let icons = document?.getElementsByClassName("icon")
        let left = document?.getElementsByClassName("left")
        let right = document?.getElementsByClassName("right")
        for (const icon of icons) {


            icon.addEventListener('dragstart', function (e) {
                let selected = e.target

                left.addEventListener("dragover", function (e) { e.preventDefault() })


                left.addEventListener('drop', function (e) {
                    right.appendChild(selected)
                    selected = null
                })
            })

        }
    },[])
    return (
        <div className='container'>
            <div className="left">
                <div className='icon' draggable={true}> </div>  <BsArrowRepeat />
                <div className=' icon' draggable={true}></div><BsArrowUpSquare />
                <div className='icon' draggable={true}><BsBadgeVr /></div>



            </div>
            <div className="right"></div>
        </div>
    );
}

export default App;
