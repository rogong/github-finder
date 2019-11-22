import React from "react";

const UserItem = ({user:{avatar_url, login, html_url, }})  => {

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>

        <div>
            <a href={html_url} className="btn btn-darkbtn-sm my-1">More</a>
        </div>
      </div>

    );
}

export default UserItem;
