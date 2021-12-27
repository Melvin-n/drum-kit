import React, {useEffect, useState} from 'react'

export default function KitContents() {

    //array of drum effects
    const drumPads = [
        {
            buttonName: 'Q',
            audioSource: './percussion/clap.wav',
            keycode: 81,
            audioName: 'Clap'
        },
        {
            buttonName: 'W',
            audioSource:  './percussion/clap2.wav',
            keycode: 87,
            audioName: 'Clap 2'
        },
        {
            buttonName: 'E',
            audioSource: './percussion/click.wav',
            keycode: 69,
            audioName: 'Click'
        },
        {
            buttonName: 'A',
            audioSource:  './percussion/hihats.wav',
            keycode: 65,
            audioName: 'Hihats'
        },
        {
            buttonName: 'S',
            audioSource:  './percussion/hihats1.wav',
            keycode: 83,
            audioName: 'Hihats 2'
        },
        {
            buttonName: 'D',
            audioSource:  './percussion/glass.wav',
            keycode: 68,
            audioName: 'Glass'
        },
        {
            buttonName: 'Z',
            audioSource:  './percussion/snare.wav',
            keycode: 90,
            audioName: 'Snare'
        },
        {
            buttonName: 'X',
            audioSource: './percussion/kick.wav',
            keycode: 88,
            audioName: 'Kick'
        },
        {
            buttonName: 'C',
            audioSource: './percussion/hit.wav',
            keycode: 67,
            audioName: 'Hit'
        }
    ]
    
    //function to handle clicking on buttons, plays audio
    const [audioName, setAudioName] = useState('Use your keyboard or click on the buttons to start')
    const playAudioClick = (e) => {
        console.log(e)
        //current time allows consecutive play before the track finishes
        e.target.firstChild.currentTime = 0
        e.target.firstChild.play()
        setAudioName(e.target.id)
    }

    //use effect to handle key down and keyup events, triggers sudio play and style change
    useEffect(() => {
        const handleKeyDown = (e) => {
            console.log(e.key)
                if(document.getElementById(e.key.toUpperCase())) {
                const audioElement = document.getElementById(e.key.toUpperCase())
                console.log(audioElement.parentNode)
                document.getElementById(e.key.toUpperCase()).currentTime = 0
                document.getElementById(e.key.toUpperCase()).play()
                setAudioName(audioElement.parentNode.id)
                audioElement.parentNode.style.backgroundColor = 'rgb(214, 35, 35)'
                audioElement.parentNode.style.border = '1px solid black'
            }
        }
        const handleKeyUp = (e) => {
            document.getElementById(e.key.toUpperCase()).parentNode.style.backgroundColor = 'crimson'
            document.getElementById(e.key.toUpperCase()).parentNode.style.border = 'default'
        }
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
    })
        
    return (
        <>
        <div id='display'>{audioName}</div>
        <div id='main-contents'>
            
            <div id='button-container'>

                {/* mapping through audio array to create buttons */}
                {drumPads.map((drum) => (
                    <button  id={drum.audioName} className='drum-pad' 
                    onClick={(e) => playAudioClick(e)}                    
                    >
                    <audio tabIndex='' className='clip' id={drum.buttonName} src={drum.audioSource} />
                    {drum.buttonName}
                    </button>
                ))}
            </div>            
        </div>
        </>
    )
}
