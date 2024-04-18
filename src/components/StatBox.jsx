import './StatBox.css'


export const StatBox = ({ title='', value='', scale='', weight=1 }) => {
    return(
        <div className="stat-box lg:h-[20vh] h-[15vh] opacity-0 glass flex flex-col px-2 py-1 items-center my-2 md:mx-0 mx-2 cursor-default">
            <p className='txt-md text-sky-700 font-bold'>{title}</p>
            <div className='flex flex-row grow h-[65%] w-full justify-evenly py-2'>
                <img className='h-[75%] lg:h-full' src={new URL(`../assets/${title.replace(' ','')+weight}.svg`, import.meta.url).href} alt="" />
                <div className='flex flex-col -top-1 pr-2'>
                    <p className='txt-lg'>{value.toString()}</p>
                    <p className='txt-sm text-right'>{scale}</p>
                </div>
            </div>
            
        </div>
)}