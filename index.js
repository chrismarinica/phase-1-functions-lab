function distanceFromHqInBlocks(block){
    const hq = 42;
    return Math.abs(hq-block);
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
  }

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) *264;
}

function calculatesFarePrice(start, destination) {
    if((Math.abs(destination - start)*264) <= 400){
        return 0;
    }
    else if ((Math.abs(destination - start)*264) <= 2000){
        return 2.56;
    }
    else if ((Math.abs(destination - start)*264) <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
    
}
