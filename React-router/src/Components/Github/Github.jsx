import React, { useEffect, useState }  from "react";
import { useLoaderData } from "react-router-dom";
// import {useLoaderData}  from "react-router-dom"
function Github()
{

    // const [data,setdata] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/BlAcKyCoDe50")
    //     .then((respone)=>respone.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])
    //alternate of the above function 

    const data = useLoaderData()


    return(
        <div className="text-center m-4 bg-gray-700 text-white p-4  ">
            <ul>
                <li>Github Login: {data.login}</li>
                <li>Github username: {data.name} </li>
                <li>Github Followers: {data.followers}</li>
                <li>Github Following:{data.following} </li>
                <li>Gitub URL: {data.html_url} </li>
            </ul>
            <img src="https://avatars.githubusercontent.com/u/117261834?v=4" alt="profile-image" srcset=""  width = {300} />

        </div>  
    )
}

export default Github
//we are using this method for the optimization because the loader function will fetch the data prior to click of the mouse
//so the data fetching will be fast as compare to the previous method
export  const GithubInfoloader =async ()=>{
  const respone = await  fetch('https://api.github.com/users/BlAcKyCoDe50')
  return respone.json()
}
