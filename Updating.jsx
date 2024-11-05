import React from 'react';
class Updating extends React.Component
{
constructor(props){
super(props);
this.state={favouritecolor:"red"};
}
componentDidMount()
{
setTimeout(()=>{
this.setState({favouritecolor:"yellow"}) },1000 ) 
}  
componentDidUpdate()

{document.getElementById("mydiv").innerHtML="The updated favourite is" + this.state.favouritecolor;
n
}
render()
{
return(
<div>
<h1 className='header'> My Favourite color is{this.state.favouritecolor}</h1>
<div id="my div">
</div>
</div>

    );
}

}
export default Updating;

