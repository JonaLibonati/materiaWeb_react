"use strict";

export const shareProject = async (event, sharedData) => {
    console.log('message from shareProject')
    try {
        await navigator.share(sharedData);
    } catch(e) {
        console.log(e);
    }
    event.stopPropagation();
}
