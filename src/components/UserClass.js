import React from "react";

class UserClass extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state= {
            userInfo:{
                name:"",
                location:"",
                avatar_url:""
            }
        };
    }

async componentDidMount()
{
	const data = await fetch("https://api.github.com/users/shlok008");
	const json = await data.json();
    console.log(json);

    this.setState({
        userInfo:json,
    });
}

	render() {
        const {name, location, avatar_url} = this.state.userInfo;
		return ( 
			<div className="user-card">
				<h2>Name: {name}</h2>
				<h2>Location: {location}</h2>
				<img src={avatar_url} />
			</div>
		);
	}
}

export default UserClass;
