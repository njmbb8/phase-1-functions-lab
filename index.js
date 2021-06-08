function distanceFromHqInBlocks(streetNum) {
    return Math.abs(42 - streetNum);
}
function distanceFromHqInFeet(streetNum) {
    const blocks = distanceFromHqInBlocks(streetNum);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, end) {
    const feetActual = distanceTravelledInFeet(start, end);
    let fare;
    if(feetActual <= 400){
        fare = 0;
    }
    else{
        let feetPaid = feetActual - 400;
        if(feetActual > 400 && feetActual <= 2000){
            fare = feetPaid * .02;
        }
        else if(feetActual > 2000 && feetActual < 2500){
            fare = 25;
        }
        else{
            fare = 'cannot travel that far';
        }
    }
    return fare;
}