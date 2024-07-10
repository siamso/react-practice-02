import React from "react";

function User({ users }) {
  const {
    avatar_url,
    created_at,
    followers,
    following,
    id,
    name,
    login,
    public_repos,
  } = users;
  return (
    <div>
      <div>
        <img
          style={{ width: "200px", borderRadius: "50%" }}
          src={avatar_url}
          alt={id}
        />
      </div>
      <div>
        <h4 className="text-2xl">Name: {name}</h4>
        <h4>username: {login}</h4>
        <h4>Joined In: {created_at}</h4>
      </div>
      <div>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
      </div>
      <p>Public Repos: {public_repos}</p>
    </div>
  );
}

export default User;
