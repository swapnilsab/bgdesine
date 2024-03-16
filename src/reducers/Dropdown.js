const initialstate="new Fruit"

const dropdownfruitreducer = (state=initialstate,action)=> {
  switch (action.type){
    case "fruit" : 
    return action.payload
     
     default  :
      return state
  }
}

export default dropdownfruitreducer