import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
let list = []
const submit = function( e ) {
    // prevent default form action from being carried out
    e.preventDefault()
    const yourname = document.querySelector('#yourname');
    const rank = document.querySelector('#rank');
    const sumname = document.querySelector('#sumname');
    const prole = document.querySelector('#prole');
    const json = {yourName: yourname.value, rank: rank.value, summonerName: sumname.value, primaryRole: prole.value, makeTeam: true};
    list.push(json);
    ReactDOM.render(<Welcome name={json.yourName}/>,mountNode);
    list.forEach(element => {
        ReactDOM.render(<DisplayList name={element.yourName} sumname ={element.summonerName} rank = {element.rank} prole = {element.primaryRole}/>,table)
    })
    return false
}

window.onload = function() {
    ReactDOM.render(<DisplayTable/>,mountNode)
    const button = document.querySelector( 'button' )
    button.onclick = submit

}
function Welcome(props) {
    return <h1>Thank you for submitting, {props.name}</h1>;
}
function DisplayList(props){
    return<tr>
        <td> <input value = {props.name} id = 'yourname'/> </td>
        <td> <input value = {props.sumname} id ="sumname"  /></td>
         <td> <input value ={props.rank} id="rank"/></td>
         <td> <input value = {props.prole} id="prole" /></td>
    </tr>;
}
function DisplayTable(){
    return <form id = 'Form'>
        Name: <input type='text' id='yourname'/> <br/>
        Summoner Name: <input type="text" id ="sumname"/><br/>
        Rank: <select id="rank">
        <option value="Iron">Iron</option>
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
        <option value="Diamond">Diamond</option>
        <option value="Masters+">Masters+</option>
    </select> <br/>
        Primary Role:<select id="prole">
        <option value="Top">Top</option>
        <option value="Jungle">Jungle</option>
        <option value="Middle">Middle</option>
        <option value="Bottom">Bottom</option>
        <option value="Support">Support</option>
        <option value="Fill">Fill</option>
    </select>
        <br/>
            <button id ='submit'>submit</button>
    </form>
}
let mountNode = document.getElementById("app");
let table = document.getElementById("data")