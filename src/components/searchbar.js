
const Searchbar = (props) => {
    const {handleSearch,searchValue,searchresults,handleSearchresult,handlesearchbutton} = props
    const combinedClasses = "flex justify-start outline-solid focus:outline-none p-2  bg-[#5fb7cf] rounded-md border-b border-[#5a79c8] font-bold w-fullscreen absolute mt-12  w-1/2  bg-[#5fb7cf] border border-[#5a79c8] max-h-40 overflow-y-auto z-10"

    return (
        <>
        <div className="flex justify-start  outline-solid focus:outline-none p-2 m-2 bg-[#5fb7cf] rounded-md   border-b border-[#5a79c8]  w-fullscreen">
            <input className="w-full outline-solid m-1 focus:outline-none  bg-[#5fb7cf] text-[#eeeeee] rounded-md " 
            type="text" placeholder="Search Countries...." onChange={(e)=> {handleSearch(e.target.value)}} value={searchValue}/>
            <button className="bg-[#3c339a] p-2 pl-4 rounded-md" onClick={()=> {handlesearchbutton(searchValue)}}>Search</button>
            {searchValue ?
            <div className={combinedClasses}>
                {searchresults.length > 0 && (
                <ul className="text-black-900">
                    {searchresults.map(result => <li  className = " px-3 py-2 cursor-pointer hover:bg-gray-500" key={result.id} onClick={() => {handleSearchresult(result.name)}}>{result.name}</li>)}
                </ul>
                )}
        </div> : null }
        </div>
        </>
    )
}
export default Searchbar;