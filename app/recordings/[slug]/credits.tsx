



export default function Credits({credits}:any) {
  return (
   
    <div className="w-full flex flex-wrap gap-x-2" style={{animationDelay:"1s"}}>
      {credits?(
        credits.map((item:any,i:number)=>{
          return(
            <div className="inline-flex min-w-min items-end fadeOn gap-2" key={`credit-${i}`} style={{animationDelay:`${i*.25}s`}}>
              <p className="whitespace-nowrap  uppercase footnote">{item.title}</p>
              <p className="whitespace-nowrap font-bold uppercase"><strong>{item.name}</strong></p>
            </div>
          )
        })
      ):('')}
    </div>
  
  );
}
