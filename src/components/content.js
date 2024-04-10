import { useState } from "react"


const Content = (props) => {
    const {name,capital,flag,flagalt,coatofarms,coaalt,official,tld,timezones,continents,altwrite} = props
    return (
        <>
        <div className="flex  flex-wrap justify-center">
        <div className="justify-content-end max-w-lg  h-auto bg-[#5fb7cf] border border-gray-200 rounded-lg text-[#3c339a] text-xl shadow bg-biege-900 shadow-xl transition duration-300   m-4 p-2">
            <span className="text-[#eeeeee]">Name:</span>
            <p className="text-justify font-bold italic">{name}</p>
            <span className="text-[#eeeeee]">Official name:</span>
            <p className="text-justify font-bold italic">{official}</p>
            <span className="text-[#eeeeee]" >Capital :</span>
            <p className="text-justify font-bold italic">{capital}</p>
            <span  className="text-[#eeeeee]">Top Level Domain :</span>
            <p className="text-justify  font-bold italic">{tld}</p>
            <span className="text-[#eeeeee]"  >
                Continent:
            </span>
            <ul className="text-justify font-bold italic">
                {continents .map(continent => <li>{continent}</li>)}
            </ul>
            <span className="text-[#eeeeee]"  >
                Alternate Writings :
            </span>
            <ol className="text-justify font-bold italic">
                {altwrite.map(alt=> <li>{alt}</li>)}
            </ol>
            </div> 
            <div className="justify-content-end max-w-lg  h-auto bg-[#5fb7cf] border border-gray-200 rounded-lg text-[#3c339a] text-xl shadow bg-biege-900 shadow-xl transition duration-300   m-4 p-6">
            <span className="text-[#eeeeee]" >Time Zones :       </span>
            <br/>
            <ul className="text-justify font-bold italic">
                {timezones.map(timezone => <li>{timezone}</li>)}
            </ul>
            </div>
            <div className="justify-content-end max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-xl transition duration-300 hover:scale-105  m-2">
                        <img className="rounded-t-lg" src={flag} alt={flagalt} />
                    <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold italic tracking-tight text-gray-900 dark:text-white">{name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is {name}  flag</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{flagalt}</p>
                    </div>
            </div> 
        </div>
        <div className="flex  flex-wrap  justify-center">
        
        <div className="justify-content-end max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-white shadow-xl transition duration-300 hover:scale-105  m-2">
                        <img className="rounded-t-lg" src={coatofarms} alt={coaalt} />
                        <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold italic tracking-tight text-gray-900">this is {name} Coat of arms </h5>
                    </div>
            </div> 
        
        </div>
        </>
    )
}
export default Content;