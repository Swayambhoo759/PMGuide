import React, {useState} from 'react';
import logo from './STATICS/NEW.png'
function LoginForm({Login,error}){
    const [details,setDetails] = useState({name:"", email:"",password:""});
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    let rt = require("./STATICS/v4.png");
    // let rt1 = require("./STATICS/Path.png");
    // let rt2 = require("./STATICS/PM.png");
    // let im=require("./STATICS/Guide..png");
    let b1 = require("./STATICS/twit.png");
    let b2 = require("./STATICS/git.png");
    let b3 = require("./STATICS/link.png");
    let b4 = require("./STATICS/goog.png");
    return (
        
        <form onSubmit={submitHandler}>
            <div id="left">  
            
                {/* <div id="rot">
                    <img id="two" src={rt.default} alt="image not found" /> 
                    <img id="three" src={rt1.default} alt="image not found" />
                    <img id="four" src={rt2.default} alt="image not found" />

                </div>
                <div id="txt">
                    <img id="one" src={im.default} alt="image not found" />
                </div>
                <p id="p1">
                    Crowdsourced PM learning platform and reader community.
                </p>
                <p id="p2">
                    our platform will provide an easy and seamless way for users to create their own personalized playlist/reading list and track progress of the learning.
                </p> */}
                <img src={logo} alt="" />
                <p id="p1">
                    Crowdsourced PM learning platform and reader community.
                </p>
                <p id="p2">
                    our platform will provide an easy and seamless way for users to create their own personalized playlist/reading list and track progress of the learning.
                </p>
                <p id='p3'>
                Go inside the best PM social network!
                </p>
                <p id="p4">
                    Email Id/ Mobile
                </p>
                <p id="p5">
                    Password
                </p>
            </div>
            <div id="right">
            <div id="boxed1">
            <img id="box1" src={b4.default} alt="image not found" />

            </div>

            <div id="boxed2">
            <img id="box2" src={b1.default} alt="image not found" />

            </div>

            <div id="boxed3">
            <img id="box3" src={b3.default} alt="image not found" />

            </div>


            <div id="boxed4">
            <img id="box4" src={b2.default} alt="image not found" />

            </div>
                <p id="rtp1">Sign&nbsp;PM&nbsp;<div id="guide"> Guide!</div></p>
                <div className="form-inner">
                {(error != "") ? (<div className="error">{error}</div>):""}
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
                </div>
            </div>
            <input id="butt" type="submit" value="" />
            <p id="button">Sign In</p>
            </div>
            <img id="rig" src={rt.default} alt="image not found" />
            <p id="rem">Remember Me</p>
            <p id="forget">Forget my ID/Password</p>
            <p id="cont">
                <div>I Don’t have an account?&nbsp;</div>
                <div className="diff">Sign up</div>
            </p>
        </form>
    )
}
export default LoginForm;