import React from 'react'

const ksksk = () => {
  return (
    <div>
       {showLocalTables===true?
      <>
      {/* {console.log(dbData[dbData.findIndex((num)=>num.matric==`${idMatric.id}`)].results)} */}
      {isOnline===false?  
      <>
      { ParsedLocalTables.length > 0 ?

<>
   {ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.map((result)=>(
 
    <>

     <TableSelect level={result.level} setLevel={setLevel} semester={result.semester} />
     <LocalTable saveBtnState={saveBtnState} saveToLocalStorage={saveToLocalStorage} saveBtn={saveBtn} setSaveBtnState={setSaveBtnState} deleteTable={deleteTable} result={result}/> 

   
    </>
   ))}
        <LocalSumarry idMatric={idMatric}/>
        <LocalSumarryGrade idMatric={idMatric}/>

   </>
  
   : <>ekioo3o3</>
}
</>
:

<>
{/* DISPLAYING THE ONLINE DATA */}

{dbData&& dbData[dbData.findIndex((num)=>num.matric==`${idMatric.id}`)].results.map((result)=>

<>
<TableSelect level={result.level} setLevel={setLevel} semester={result.semester} />
 <LocalTable saveBtnState={saveBtnState} saveToLocalStorage={saveToLocalStorage} saveBtn={saveBtn} setSaveBtnState={setSaveBtnState} deleteTable={deleteTable} result={result}/> 
</>
)

}


</>
      }
      </>
      :
      <>
     {ParsedLocalTables[ParsedLocalTables.findIndex((num)=>num.matric==`${idMatric.id}`)].results.map((result)=>(
 
 <>

  <TableSelect level={result.level} setLevel={setLevel} semester={result.semester} />
  <LocalTable saveBtnState={saveBtnState} saveToLocalStorage={saveToLocalStorage} saveBtn={saveBtn} setSaveBtnState={setSaveBtnState} deleteTable={deleteTable} result={result}/> 


 </>
))}
     <LocalSumarry idMatric={idMatric}/>
     <LocalSumarryGrade idMatric={idMatric}/>


      </>
      
    }
 
   
    {/* ))} */}

      



    </div>
  )
}

export default ksksk
