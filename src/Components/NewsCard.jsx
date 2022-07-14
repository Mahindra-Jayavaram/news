import React from 'react';
import styled from 'styled-components';


export const NewsCard = ({data}) => {
  console.log("Data", data);
  return (
    <div className='detailsDiv'>
        {data.map((article,i)=>{
            return(
                <div key ={i}style={{
                    border:"1px solid black",
                    borderRadius:"10px",
                    width:"100%",
                    justifyContent:'center',
                    height:"400px",
                    overflow:"scroll"
                }}>
                    <div style={{
                        height:"fit-content"
                    }}><h3 style={{lineHeight:"20px"}}>{article.title}</h3></div>
                    <h6><b>Source:{article.source.name}</b>
                    </h6>
                    <div><img src={article.image} alt="" style={{width:"300px",height:"300px"}} /></div>
                    <p><b>Content:</b>{article.content}</p>
                    <div><p><b>Description</b>{article.description}</p></div>
                </div>
            )
        })}
    </div>
  )
}
const Container =styled.div`
display:grid,
grid-template-columns: repeat(4,1fr),
`

