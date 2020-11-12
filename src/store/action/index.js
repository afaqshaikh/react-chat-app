

const set_data = (data) => {
    return (dispatch) =>{
    console.log('Running')
        dispatch({
        type: 'Setdata',
        payload : data
    })

    }
}

export {
    set_data
}