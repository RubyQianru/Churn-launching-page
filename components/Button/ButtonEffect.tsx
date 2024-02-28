import './ButtonEffect.css'

const ButtonEffect = (
    {
        text
    } : {
        text:string
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
            className="relative overflow-hidden shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
            onClick={createRipple}
        >
            {text}
        </button>
    )
}

export default ButtonEffect