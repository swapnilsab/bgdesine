const initialstate="swapnil"

const user = (state=initialstate,action)=> {
  switch (action.type){
    case "user" : 
    return action.payload
     
     default  :
      return state
  }
}

export default user