const initialstate=1

const upDown = (state=initialstate,action)=> {
  switch (action.type){
     case "INCREMENT" : return state + 1 
     case "DECREMENT" : return  state-1
     case "MULTIPLCTION" : return 4
     default  : return state
  }
}

export default upDown