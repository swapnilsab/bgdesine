
 export const incNum= ()=> {

    return{
        type: "INCREMENT"
    }
}

export const decNum =(num) => {
    return {
        type : "DECREMENT",
        payload: num
    }
}

export const mULTIPLCTION =(num) => {
    return {
        type : "MULTIPLCTION",
        payload: num
    }
}
export const user =(u) => {
    return {
        type : "user",
        payload : u
        
    }
}

export const dropdownfruit =(u) => {
    return {
        type : "fruit",
        payload : u
        
    }
}
