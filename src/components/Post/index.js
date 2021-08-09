import React from 'react'

function index({name,date,desc,img,opacity}) {
    return (
        
        <div className={`post-show ${opacity?`opacity`:``}`}>
            <div className="show-header">
                <div>
                    <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="profilepic"/>
                    <div>
                        <h4>{name}</h4>
                        <p>{date} <i className=""></i></p>
                    </div>
                </div>
                <p>{desc}</p>
            </div>
            <div className="show-img">
                {
                    img?<img src={img} alt="img"/>:null
                }
                
            </div>
        </div>
        
    )
}

export default index
