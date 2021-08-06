import React from 'react'

function index({name,date,time,desc,img}) {
    return (
        
        <div className="post-show">
            <div className="show-header">
                <div>
                    <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="profilepic"/>
                    <div>
                        <h4>{name}</h4>
                        <p>{date} {time}<i className=""></i></p>
                    </div>
                </div>
                <p>{desc}</p>
            </div>
            <div className="show-img">
                <img src={img} alt="img"/>
            </div>
        </div>
        
    )
}

export default index
