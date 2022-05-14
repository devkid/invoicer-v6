import React from "react";
import img from "../images/add.png"
import addCircle from "../images/addCircle.png"

export default function TestSateObject(){

    const [contact, setContact] = React.useState(
        {
            firstName: "John",
            lastName: "Doe",
            phone: "+1 (719) 555-1212",
            email: "itsmyrealname@example.com",
            isFavorite: false
        }
    )

    function toggleFavorite(){
        console.log("toggle Favorite")
    }
    return (
        <main>
            <article>
                <img src={img} />
                <div >
                    <img
                        src={`../images/addCircle.png`}
                        onClick={toggleFavorite}
                    />
                    <h2 >
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p >{contact.phone}</p>
                    <p >{contact.email}</p>
                </div>

            </article>
        </main>
    )
}