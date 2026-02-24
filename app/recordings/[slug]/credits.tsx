



export default function Credits({credits}:any) {
  return (
   
    <div className="w-full flex flex-wrap gap-x-2" style={{animationDelay:"1s"}}>
      {credits?(
        credits.map((item:any,i:number)=>{
          return(
            <div className="inline-flex min-w-min items-start md:items-end fadeOn gap-2 " key={`credit-${i}`} style={{animationDelay:`${i*.25}s`}}>
              <p className="whitespace-nowrap  uppercase footnote pt-0.5">{item.title}</p>
              <p className="sm:whitespace-nowrap font-bold uppercase"><strong>{item.name}</strong></p>
            </div>
          )
        })
      ):('')}
    </div>
  
  );
}
