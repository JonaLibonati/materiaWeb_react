"use strict";

import { useEffect } from "react";
import { openWhenOnScreen } from '../components/overview/ProjectCard/card.open';

//This script controls the project section using URLstrings.
//Obtaining variables from the URL

const path = window.location.href;

export const useOnUrlString = ( project, urlString, firstRender, setFirstRender) => {

    useEffect(() => {

        if (firstRender) {
            const { pj__box } = project.current;

            let pathString;
            let pathValues;
            let projectValue;
            let galleryValue;

            //Set values only when path has '?' and '&'
            if (path.includes('?') && path.includes('&')) {
                pathString = path.split('?');
                pathValues = pathString[1].split('&');
                projectValue = pathValues[0];
                galleryValue = stringToBool(pathValues[1]);
            }

            if ( projectValue == urlString) {
                pj__box.scrollIntoView();
                openWhenOnScreen(project.current, setFirstRender);
            }
        }
        
    }, [])
}

// Parse string to boolean
function stringToBool (string) {
    switch(string.toLowerCase().trim()){
        case "true":
        case "yes":
        case "1":
          return true;

        case "false":
        case "no":
        case "0":
        case null:
          return false;

        default:
          return false;
    }
}