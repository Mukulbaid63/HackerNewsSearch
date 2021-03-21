import React from 'react';
import './QueryOutput.css'
const QueryOutput = ({result,query}) => {
    const emptyHandler=()=>{
        if(result.length==0 && query!=""){
            return (
                <p style={{display:'flex',justifyContent:'center',alignContent:'center',fontFamily:'Lato',fontSize:'30px',fontWeight:'700'}}>We found no stories matching {query}</p>
            )
        }
    }
    return (
        <div style={{backgroundColor:'#f7f7f7'}}>
            {emptyHandler()}
            {
                result.map((item,itemindex)=>(
                    <>
                   <div style={{display:'flex',fontFamily:'Lato',fontSize:'17px',marginLeft:'15px'}}>
                    <div key={itemindex}>{item.title}
                    
                   {
                       item.url!=null&&item.url!=""&&<a href={item.url} style={{fontSize:'15px',color:'#878380',textDecoration:'none',marginLeft:'5px'}}>({item.url})</a>
                   }
                    </div>
                    </div> 
                    <div style={{display:'flex',fontSize:'12px',color:'#878380',marginLeft:'15px',marginTop:'5px'}}>
                    <span style={{padding:'0px 3px',margin:'0px 3px'}}>{item.points} points</span>|<span style={{padding:'0px 3px',margin:'0px 3px'}}>{item.author}</span>|<span style={{padding:'0px 3px',margin:'0px 3px'}}>{item.num_comments} comments</span>
                    </div>
                    </>
                ))
            }
        </div>
    );
};

export default QueryOutput;
