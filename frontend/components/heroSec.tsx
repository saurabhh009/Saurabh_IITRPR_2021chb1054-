import Image from "next/image";

export default function HeroSec() {
    return (
        <main className="flex flex-col justify-center items-center">
            <div>
                <div className="flex items-center justify-center p-4">
                    <Image src="/bg.png" alt="BG image" width={700} height={600} style={{ borderRadius: "30px" }} />
                </div>



                <form className="max-w-md mx-auto bg-white rounded-full">

                    <div className="relative tect-black" >
                        <button type="submit" className="text-black absolute end-2.5 bottom-2.5 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg></button>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />

                    </div>
                </form>



                <p className="mr-2 p-2">Suggested jon searches</p>

                <div className="flex items-center justify-center gap-4 p-3">
                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Founder</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Founding Partner</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Board Member</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Entrepreneur in Residence</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Personal Assistant</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Sales</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 p-3">
                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Product Manager</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Co-founder</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Developer</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>

                    <div style={{ border: "0.5px solid gray" }} className="flex items-center justify-between rounded-full h-[50px] w-auto p-2">
                        <button style={{ display: "flex", alignItems: "center" }}>
                            <span className="mr-2">Managing director</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <p className="mr-2 p-2">Recommended for you</p>


                <div className="flex items-center justify-center mr-2 p-2">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                        <img className="rounded-full h-20 w-20" src="/google.png" alt="" />

                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-white-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                $55-60k per month
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg h-20" src="facebook.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                $55-60k per month
                            </div>
                        </div>
                        
                    </div>
                    <div className="max-w-sm bg-white border border-gray-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-full h-20 w-20" src="/comp.png" alt="" />
                        </a>
                        <div className="p-5">
                            
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                $55-60k per month
                            </div>
                        </div>
                    </div>
                </div>





                





                </div>
        </main>

    );
}
