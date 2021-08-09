import React,{useState, useEffect} from 'react'
import './index.css';
import axios from 'axios';
import Post from '../Post';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
function Postbox(props) {
    const [show, setShow]=useState(false);
    const [input, setInput]=useState("Trending");
    const [gifs, setGifs]=useState([]);
    const [loader,setLoader]=useState(false);
    const [choosenGif, setChoosenGif]=useState("");
    const [postText, setPostText]=useState("");
    const [opacity, setOpacity]=useState(false);
     
    useEffect(()=>{
        const axiosFetch=async ()=>{
            setLoader(true);
            const output= await axios ("https://api.giphy.com/v1/gifs/trending",{
                params:{
                    api_key:"IJi2vniyuHEMTn0YUrATrbhxhpL5P09e",
                    limit:15,
                    offset:1,
                }
            })
            setLoader(false);
            setGifs(output.data.data);
            
        }
        axiosFetch();
        
        // console.log(gifs)
    },[])

     useEffect(()=>{
        setGifs([]);
        
        const axiosFetch=async ()=>{
            setLoader(true);
            const output= await axios ("https://api.giphy.com/v1/gifs/search",{
                params:{
                    api_key:"IJi2vniyuHEMTn0YUrATrbhxhpL5P09e",
                    q:{ input },
                    limit:15,
                    offset:1,
                }
            })
            setLoader(false);
            setGifs(output.data.data);
            
        }
        axiosFetch();
        
        // console.log(gifs)
    },[input])

    const list=()=>{
        return gifs.map((item)=>{
            return (
                <img 
                onClick={()=> {
                    setChoosenGif(item.images.fixed_height_downsampled.url); 
                    setShow(false);
                }}
                key={item.id} 
                src={item.images.fixed_height_downsampled.url} 
                alt="img"/>
            )
        })
    }


    const onClickGif=(e)=>{
        e.preventDefault();
        setShow(!show);
    }

    const onClickPost=(e)=>{
        e.preventDefault();
        if(postText===""){
            return;
        }
        var today = new Date();

        var dateToday =today.getDate() +'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        var timeNow = today.getHours()  + ":" +today.getMinutes();
        props.createPost({
            name:"Jawakar Durai",
            date:dateToday,
            time:timeNow,
            desc:postText,
            img:choosenGif
        })

        setPostText("");
        setChoosenGif("");
        setOpacity(true);
    }

    const renderedPosts=()=>{
        console.log(props.posts);
        return  props.posts.map((post,i)=>{
            return (
                <Post opacity={opacity} key={i} name={post.name} date={post.date} time={post.time} desc={post.desc} img={post.img} />
            )
        })
    }

    return (
        <div className="post">
        <div className="post-create">
            <div className="create-header">
                <div className="header-buttons">
                    
                        < i className="fas fa-pen"><span>Compose Post</span></i>
                        < i className="fas fa-photo-video"><span>Photo/Video Album</span></i>
                        < i className="fas fa-video"><span>Live Video</span></i>
                    
                </div>
                <div className="header-cross">
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className="text-area">
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="img"/>
                <textarea placeholder="Write Something..." value={postText} onChange={(e)=>setPostText(e.target.value)} onClick={()=>setOpacity(false)}/>
                < i className="fas fa-laugh-beam"></i>
                
                
            </div>  
            <div className="selected-img">
                {
                   choosenGif?(<img src={choosenGif} alt="gif"/>):null
                }
            </div>
            
            <div className="color-selector">
            < i className="fas fa-arrow-circle-left"></i>
            < i className="fas fa-align-justify"></i>
                <ul>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>
                    <li>< i className="fas fa-stop"></i></li>

                </ul>
            </div>
            <div className="attachment-button">
                <div  className="button-att">
                    <button> 
                        < i className="fas fa-user-friends"></i> Tag Friends
                    </button>
                </div>
                <div  className="button-att">
                <button> 
                        < i className="fas fa-map-marker-alt"></i> Check in
                    </button>
                </div>
                <div className="button-att">
                    
                    <button
                        onClick={(e)=>onClickGif(e)}
                    > 
                        < i className="fas fa-file-image"></i> Gif
                    </button>
                    
                    <div className={`container ${show?'show':null}`}>
                        <input 
                            type="text" 
                            placeholder="GIF"
                            value={input}
                            onChange={(e)=>setInput(e.target.value)}
                        ></input>
                        {   
                            loader?(<i class="fas fa-spinner"><h4>Loading</h4></i>):null
                        }
                        {list()}
                        
                    </div>
                    
                </div>
                <div  className="button-att" >
                <button> 
                        < i className="fas fa-calendar-alt"></i> Tag Event
                    </button>
                </div> 
            </div>
            <div className="post-footer">
                <button> <i className="fas fa-lock"></i> Only me <i className="fas fa-sort-down"/></button>
                <button className={`${postText===""?`disabled`:``}`} onClick={(e)=>onClickPost(e)}> Post </button>
            </div>
        </div>
        {
           renderedPosts()
        }
        {/* <Post name={"Deepak Gupta"} date={"6th August"} time={"22:30"} desc={"What we think, we become. – Buddha"} img={"https://coolthemestores.com/wp-content/uploads/2021/04/nature-chrome-featured.jpg"} /> */}
        </div>

        
    )
}
const mapStateToProps=(state)=>{
    return { posts:state.posts }
}

export default connect(mapStateToProps,{createPost})(Postbox);
