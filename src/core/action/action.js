import axios from 'axios'

const Types = {
    get: '',
    scrolling:"scrolling",
    loadMore:"loadMore",
    pagination:"pagination",
    shared:"shared",
    trend:"trend",
    slider:"slider",
    spinner: 'spinner',
    message: 'message',
    loadingPage: 'loadingPage',
    nav: 'nav',
    mode: '',
    spinners:'spinners',
    dir:'dir'
}

export const setDir = (dir) => {
    return (dispatch) => {
        dispatch({
            type: 'dir',
            dir: dir
        })
    }
}
export const nav = (margin) => {
    return (dispatch) => {
        dispatch({
            type: 'nav',
            nav: margin
        })
    }
}
export const modePage = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'mode',
            mode: mode
        })
    }
}
// trend
export const getMovie = (page) => {

    return (dispatch) => {

        axios
            .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
            .then(res => {
                dispatch({
                    type: 'trend',
                    trend: res.data.results
                })
                console.log(res.data.results)

                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })

            }).catch(err => {
                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })

            })
    }
}

//shared
export const getShared = (page) => {

    return (dispatch) => {

        axios
            .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
            .then(res => {
                dispatch({
                    type: 'shared',
                    shared: res.data.results
                })

                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })

            }).catch(err => {
                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })

            })
    }
}
//slider
export const getSlider = (page) => {

    return (dispatch) => {
        dispatch({
            type: 'loadingPage',
            loadingPage: true
        })

        axios
            .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
            .then(res => {
                dispatch({
                    type: 'slider',
                    slider: res.data.results
                })

                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })

            }).catch(err => {
                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })

            })
    }
}


export const scrollingMovie = (page) => {

    return (dispatch) => {

        dispatch({
            type: 'spinners',
            spinners: true
        })
         axios
            .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
            .then(res => {
                dispatch({
                    type: 'scrolling',
                    scrolling: res.data.results
                })

                dispatch({
                    type: 'spinners',
                    spinners: false
                })
                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })

            }).catch(err => {
                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })

                dispatch({
                    type: 'spinners',
                    spinners: false
                })
            })
    }
}

//loadMore
export const loadMore = (page) => {

    return (dispatch) => {
        dispatch({
            type: 'spinners',
            spinners: true
        })
        axios
            .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
            .then(res => {
                dispatch({
                    type: 'loadMore',
                    loadMore: res.data.results
                })

                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })
                
                dispatch({
                    type: 'spinners',
                    spinners: false
                })
                

            }).catch(err => {
                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })
                dispatch({
                    type: 'spinners',
                    spinners: false
                })
            })
    }
}

//pagination
export const dataPagination = (page) => {

    return (dispatch) => {
        dispatch({
            type: 'spinners',
            spinners: true
        })

        axios
            .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
            .then(res => {
                dispatch({
                    type: 'pagination',
                    pagination: res.data.results
                })

                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })
                dispatch({
                    type: 'spinners',
                    spinners: false
                })
            }).catch(err => {
                dispatch({
                    type: 'loadingPage',
                    loadingPage: false
                })
                dispatch({
                    type: 'spinners',
                    spinners: false
                })
            })
    }
}




export const reset = (page) => {
    
    return (dispatch) => {
        dispatch({
            type: 'loadingPage',
            loadingPage: true
        })

        dispatch({
            type: 'reset',
        })
    }
}
