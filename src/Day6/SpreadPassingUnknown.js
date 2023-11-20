import React, { Component } from 'react'

export default class SpreadPassingUnknown extends Component 
{
    render()
    {
        const{title1,...restValue}=this.props;

        return (
            <div>
                <h1>Title is {this.props.title1}</h1>
                <input {...restValue}></input>
            </div>
            )
        }
}
