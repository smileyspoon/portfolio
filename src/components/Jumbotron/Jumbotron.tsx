import React, {useState, useEffect} from 'react';
import { Jumbotron as Jumbo,  } from "react-bootstrap";


export const Jumbotron = (props: any) => {


    


    const [isLoading, setIsLoading] = useState(true);
    const [titleString, setTitle] =useState("");


        
    const title = () => {

        const ref = window.location.pathname;


        
        if (ref === '/') {

            setTitle('Home');

        }

        else if (ref === '/pomodoro') {
            setTitle('Pomodoro');

        }

        else if (ref === '/about') {
            setTitle('About');
        }

        else if (ref === '/contact') {
            setTitle('Contact');

        }

        else {

            setTitle('Update Jumbotron');
            
        }
        
    }

    useEffect(()=>{

        title();

    });
    

    return (

        <React.Fragment>
        <Jumbo fluid={true} className="jumbotron">
       
        {/* <img src={mainImage} alt=""/> */}
        
        <p className="title">{titleString}
        </p>
         </Jumbo>


        </React.Fragment>
        




    );
};