

const INITIAL_STATE ={
    users : [
        {
            name : "Ahemr",
            email : 'Afaqe@gmail.com'
        }
    ]
}

export default (state = INITIAL_STATE,action) => {
    console.log(action)
    switch (action.type) {
        case "Setdata" :
            return ({
                ...state,
                name : [...state.users,action.payload]
            })
    }
    return state
}