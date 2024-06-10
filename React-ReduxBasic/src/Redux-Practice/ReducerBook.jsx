import buy_a_book from './ActionType.jsx'

const initialState={
    NumberOfBooks:20
}

const ReducerBook=(state=initialState, action)=>{
      switch(action.type){
        case buy_a_book:return{
            ...state,NumberOfBooks:state.NumberOfBooks-1
        }
        default : return state
      }
}

export default ReducerBook

