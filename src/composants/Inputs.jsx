import React from "react";

const Inputs = () => {
    return (
      <div className="inscription">
        <div className="title">
            <h2>Hello Again!</h2>
        </div>
        <div className="wolcome">welcome back</div>
        <div className="inputs">
            <label htmlFor="">first_name</label>
            <input type="text" name="" id="" placeholder="Martin"/>
        </div>
        <div className="inputs">
            <label htmlFor="">Second_name</label>
            <input type="text" placeholder="smith"/>
        </div>
        <div className="inputs">
            <label htmlFor="">Email</label>
            <input type="text"className="placeholder" placeholder="martinputa003@gmail.com" />
        </div>
        <div className="inputs">
            <label htmlFor="">Tel</label>
            <input type="text" placeholder="0854809582"/>
        </div>
        <div className="btn_send">
            <a href="#">Send</a>
        </div>
      </div>
    )
}
export default Inputs