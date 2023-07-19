import React from 'react'

export default function Header({ checkTabs }) {
    // const checkTabs = () => {
    //     console.log("checkTabs")
    // }
    return (

        <header className="text-gray-600 body-font" style={{ position: "fixed", width: "100%", zIndex: "99", top: "0" }}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="ml-3 text-xl">Stock Management System</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 cursor-pointer" onClick={() => { checkTabs('all') }}>All products</a>
                    <a className="mr-5 cursor-pointer" onClick={() => { checkTabs('new') }}>Add new product</a>
                </nav>
            </div>
        </header>
        // <header className="text-gray-600 body-font">
        //     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        //         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        //                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        //             </svg>
        //             <span className="ml-3 text-xl">Stock Management System</span>
        //         </a>
        //         <div className="md:ml-auto flex items-center text-base justify-center">
        //             <button className="mr-5 border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:border-indigo-500" onClick={() => { checkTabs('all') }}>All products</button>
        //             <button className="mr-5 border border-gray-300 py-2 px-4 rounded-lg focus:outline-none focus:border-indigo-500" onClick={() => { checkTabs('new') }}>Add new product</button>
        //         </div>
        //     </div>
        // </header>


        // <header style={{ position: "absolute", width: "100%", zIndex: "99" }} className="flex items-center justify-between p-4 bg-gray-200">
        //     <div className="flex items-center">
        //         <img src="logo.png" alt="Logo" className="h-8 w-auto mr-2" />
        //         <h1 className="text-lg font-bold">Your Company</h1>
        //     </div>
        //     <div className="flex items-center space-x-4">
        //         <button
        //             className="text-gray-700 hover:text-gray-900 focus:outline-none"
        //             onClick={() => { checkTabs('all') }}
        //         >
        //             All products
        //         </button>
        //         <button
        //             className="text-gray-700 hover:text-gray-900 focus:outline-none"
        //             onClick={() => { checkTabs('new') }}
        //         >
        //             Add new product
        //         </button>
        //     </div>
        // </header>





    )
}
