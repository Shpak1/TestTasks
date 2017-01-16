import {MAP_RESULT} from './types'

export const fetchResult = (StartLocation, endLocation, Total) => {
    return (dispatch) => {
        let MapResult =[]

        MapResult.push({
            StartLocation:StartLocation,
            EndLocation:endLocation,
            total:Total
        })

        dispatch({
            type: MAP_RESULT,
            payload: MapResult
        })

    }

};
