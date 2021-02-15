export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
    //"BQARgMycIa77_I2G1Dublqxaa-m2QlV4bFH4-IqbDf9SzMSTil-0bdMxK9l5tg7RF0nCGHN3uw0JjMh62WDwAVmDw_PtWOyoiNqR5FyzSyObaXviqy0u8t3A9pO-_KQz89RP8tB4f3cA4EX_ZX8r1tRtrUvH6jjCsEvJ-c3QFLs2QYvN4f8yF8xw"
};


const reducer = (state, action) => {
    console.log(action);
    //Action -> type,[payload]
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;

    }
}

export default reducer;