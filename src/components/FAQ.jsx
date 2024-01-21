// import React, { useState } from 'react'
// import { isOmittedExpression } from 'typescript';

// export default function FAQ() {

//   const [open, setOpen] = useState(false);
//   const [open2, setOpen2] = useState(false);
//   const [open3, setOpen3] = useState(false);
//   const [open4, setOpen4] = useState(false);
//   return (
//     <>
//       <div className='FAQ'>
//         <div className='faqtext'>
//           <h1 className='greensub2'>Frequently Asked Questions</h1>
//           <h2>Find all your answers related to this event.</h2>
//         </div>

//         {/* faq1 */}
//         <div className='verticalfaq'>
//           <div className={open === false ? 'faqcomp' : 'faqcomp active'} onClick={() => setOpen(!open)}>

//           <h1>Who can participate in this workshop?</h1>
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
//           <path d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.673009 17.5592 0.673009 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.673011 1.64932 0.673011 1.16116 1.16117C0.673009 1.64932 0.673009 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z" fill="#005836"/>
//           </svg>
//           </div>

//           {open && (
//           <div>
//             <Dropdownitem/>
//           </div>)}
//         </div>

//         {/* faq2 */}
//         <div className='verticalfaq'>
//           <div className={open2 === false ? 'faqcomp' : 'faqcomp active'}onClick={() => setOpen2(!open2)}>

//           <h1>What are the prerequisites for joining this workshop?</h1>
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
//           <path d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.673009 17.5592 0.673009 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.673011 1.64932 0.673011 1.16116 1.16117C0.673009 1.64932 0.673009 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z" fill="#005836"/>
//           </svg>
//           </div>

//           {open2 && (
//           <div>
//             <Dropdownitem/>
//           </div>)}
//         </div>

//         {/* faq3 */}
//         <div className='verticalfaq'>
//           <div className={open3 === false ? 'faqcomp' : 'faqcomp active'} onClick={() => setOpen3(!open3)}>

//           <h1>Can i interact with the host at the workshop?</h1>
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
//           <path d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.673009 17.5592 0.673009 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.673011 1.64932 0.673011 1.16116 1.16117C0.673009 1.64932 0.673009 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z" fill="#005836"/>
//           </svg>
//           </div>

//           {open3 && (
//           <div>
//             <Dropdownitem/>
//           </div>)}
//         </div>

//         {/* faq4 */}
//         <div className='verticalfaq'>
//           <div className= {open4 === false ? 'faqcomp' : 'faqcomp active'} onClick={() => setOpen4(!open4)}>

//           <h1>Is it pre-recorded or live workshop?</h1>
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
//           <path d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.673009 17.5592 0.673009 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.673011 1.64932 0.673011 1.16116 1.16117C0.673009 1.64932 0.673009 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z" fill="#005836"/>
//           </svg>
//           </div>

//           {open4 && (
//           <div>
//             <Dropdownitem/>
//           </div>)}
//         </div>

//         <h1 className='greensub2'> <span className='greenshub3'>Don't see the answer you're looking for?</span> Contact Us!</h1>
//         <h2>Your question might be answered by the host, speakers or NiagaraBenchlands Team</h2>
//         <input className="faqinput" type="text" placeholder='please submit your questions' />

//         <button className='btn'>Post</button>
        
//       </div>
    
    
    
    
//     </>
//   )
// }

// function Dropdownitem(){
//   return(
//     <>
//       <p className='dropdowncomp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//     </>
//   )
// }

