import React, { Component } from 'react';

const ContactCard = (props) => {
    return ( 
            <div className="album py-2 w-full ">
                <div className="col-md-4">
                    <div className="card" >
                        <img src={props.contact.imgUrl} />
                        <div className="card-header">
                            <h3>{props.contact.name}</h3>
                        </div>
                        <div className="card-body" >
                            <p>Phone : {props.contact.phone}</p>
                            <p>Email :{props.contact.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            )
 
}
 
export default ContactCard;

