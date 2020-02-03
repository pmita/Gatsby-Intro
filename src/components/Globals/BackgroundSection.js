import React from 'react'
//We are importing the default way of background image from gatsby
import BackgroundImage from 'gatsby-background-image'

//We need to pass in some props to our BackgroundSection function
export default function BackgroundSection({ 
    /*We are passing in some props to our background Section that will help us style, display and customize our img.
*/
    img,
    styleClass,
    title,
    children
    }){
    return (
        //We are using some of the props we got from the index.js to personalise the BackgroundImage section
        <BackgroundImage className={styleClass} fluid={img}>
            <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
                {title}
            </h1>
            {children}
        </BackgroundImage>
    );
}


/*Even if we didn't pass on any of the below props to our BackgroundSection function we would still the below values set 
as default. we can then further define this ones with oiur css*/
BackgroundSection.defaultProps = {
    title: "default title",
    styleClass: "default-background"
}