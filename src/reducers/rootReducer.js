const initState = {
    posts:[
        {id:'1', title:'Swami Vivekananda', body:'Take up one idea. Make that one idea your life; dream of it; think of it; live on that idea. Let the brain, the body, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success, and this is the way great spiritual giants are produced.'},
        {id:'2', title:'Narendra Modi', body:'The world is seeing India with a ray of hope and our diaspora can play a crucial role in further spreading it. The Indian community does not settle abroad to enter into politics or take a seat in the global politics. Wherever they go, they think and act towards benefit of the society.'},
        {id:'3', title:'Abdul Kalam', body:'Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.'},
    ]
}

const rootReducer = (state = initState,action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !==  post.id
        });
        return{
            ...state,
            posts:newPosts
        }
    }
    return state;
}

export default rootReducer