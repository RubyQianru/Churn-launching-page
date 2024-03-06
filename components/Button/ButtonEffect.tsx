
"use client"
import './ButtonEffect.css'

const ButtonEffect = (
    {
        text,
        style
    } : {
        text: string
        style: string
    }
) => {
    function createRipple(e) {

        const ripple = document.createElement('div')

        e.currentTarget.appendChild(ripple)

        const rect = e.currentTarget.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)

        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`
        ripple.style.width = `${size}px`
        ripple.style.height = `${size}px`

        ripple.classList.add('ripple')
        
    }
    
    return (
        <button 
            className={style}
            onClick={createRipple}
        >
            {text}
        </button>
    )
}

export default ButtonEffect