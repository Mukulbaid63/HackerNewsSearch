import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
const QueryInput = ({query,setquery,fetchQuery}) => {

    const changeHandler=(evt)=>{
        setquery(evt.target.value);
    }
    useEffect(() => {
        fetchQuery();
       
    }, [query])
    return (
        <>
        <div style={{display:"flex",fontFamily:'Lato',alignItems: "center",backgroundColor:'#e86813',border:'2px solid #e86813'}}>   
                <p style={{color:'white',border:'1px solid white',fontSize:'22px',padding:'4px 10px',margin:'0px 20px'}}>H</p>
                <SearchIcon style={{color:'#e86813',backgroundColor:'white',fontSize:'36px'}}/>

                    <input style={{outline:"none",border:'none',padding:'0px',height:'5vh',width:'80vw',margin:'0px'}} placeholder="Search stories by title, url or author" onChange={changeHandler}>


                    </input>
                    &nbsp;&nbsp;by&nbsp;&nbsp;
                    <span style={{color:'white',margin:'0px 10px'}}> Algolia</span>
                    <TuneIcon style={{color:'white',margin:'0px 10px'}}/>

        </div>
        <div style={{backgroundColor:'#f7f7f7',padding:'15px'}}>
            Search
        <select style={{marginLeft:'5px',fontSize:'15px'}}>
            <option>All </option>
            <option selected> Stories</option>
            <option> Comments</option>

        </select>
        &nbsp;by 
        <select style={{marginLeft:'5px',fontSize:'15px'}}>
            
            <option selected> Popularity</option>
            <option> Date</option>

        </select>
        &nbsp;for
        <select style={{marginLeft:'5px',fontSize:'15px'}}>
            <option selected>All time</option>
            <option>Last 24h</option>
            <option>Past Week</option>
            <option>Past Month</option>
            <option>Past Year</option>
            <option>Custom Range</option>
        </select>
        </div>
        </>
    );
};

export default QueryInput;