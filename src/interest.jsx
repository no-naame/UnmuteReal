import React, {useContext} from 'react';

const Interest = ({listOfInterests, setListOfInterests}) => {
    return (
        <div className="flex">

            {listOfInterests.length < 10 && listOfInterests.map((e)=>{
                return (<div className="border p-1.5 mx-2 flex bg-[#9900FE] rounded-3xl">

                    {e}
                    <div className="ml-6 mr-2 hover:cursor-pointer" onClick={()=>{
                        setListOfInterests((efgh)=>{
                            return efgh.filter((ijkl)=>ijkl!==e)
                        })
                    }}>
                        x
                    </div>
                </div>)
            })}

        </div>
    );
};

export default Interest;