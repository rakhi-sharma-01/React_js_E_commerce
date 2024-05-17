const initialState ={
    items:[],
};
const cartReducer = (state=initialState, action) =>{
    console.log("payload", action.payload);
    switch(action.type){
        case 'ADD_TO_CART':
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            console.log('existingItem', existingItem)
            if(existingItem){
                return{
                    ...state,
                    items: state.items.map(item=> item.id === action.payload.id ? ({...item, quantity : item.quantity +1}) : item)
                    // items: state.items.map((obj) => ({...obj, quantity: obj.quantity + 1}))
                }
            }else{
                return{
                   ...state,
                   items: [...state.items, action.payload],
                }
            }
        case 'INCREASE_QUANTITY':
            return{
                ...state,
                items: state.items.map(item=> item.id === action.payload.id ? ({...item, quantity : item.quantity +1}) : item)
            }
        case 'DECREASE_QUANTITY':
            return{
                ...state,
                items: state.items.map(item => 
                   item.id === action.payload.id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item)

                // items: state.items.map((obj)=> ({...obj, quantity: Math.max(obj.quantity - 1,1)}))
                // items: state.items.map(item => item.id === action.payload.id ? {...item, quantity: Math.max(item.quantity - 1,0)} :item)
            }   
        default :
        return state         
    }
}


export default cartReducer;

// const cartReducer=(state=initialState,action)=>{
//     switch(action.type){
//      case 'ADD_TO_CART':
//          console.log('Adding to cart:', action.payload);
 
//          return{
//              ...state,
//              items: [...state.items, action.payload],
//          };  
//      default :
//      return state
//     }
//  };

// incrementCount(item,index){ // index will be the key value 
    //     const items = this.state.itemsList;           
    //     item.quantity += 1;
    //     items.splice(index,1,item);
    //     this.setState({
    //       itemsList: items
    //     });
    //    }

                // const itemsList = state.items; 
            // const existingItem1 = state.items.find(item => item.id === action.payload.id);
            // console.log('existingItem12', existingItem1)

            // existingItem1.quantity += 1;
            // itemsList.splice(action.payload.index,1,existingItem1);
            // console.log('existingItem1', existingItem1,itemsList)