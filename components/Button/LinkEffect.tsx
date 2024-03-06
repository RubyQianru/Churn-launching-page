// import Link from "next/link";

// import './ButtonEffect.css'

// const LinkEffect = (
//     {
//         text,
//         href,
//         style
//     } : {
//         text: string,
//         href: string,
//         style: string
//     }
// ) => {
//     function createRipple(e) {

//         const ripple = document.createElement('div')

//         e.currentTarget.appendChild(ripple)

//         const rect = e.currentTarget.getBoundingClientRect()
//         const size = Math.max(rect.width, rect.height)

//         const x = e.clientX - rect.width/2 - size / 2
//         const y = e.clientY  - size / 2

//         ripple.style.left = `${x}px`
//         ripple.style.top = `${y}px`
//         ripple.style.width = `${size}px`
//         ripple.style.height = `${size}px`

//         ripple.classList.add('ripple')
        
//     }
//     return (
//         <Link 
//             href={href}
//             className={style}
//             onClick={createRipple}
//         >
//             {text}
//         </Link>
//     )
// }

// export default LinkEffect