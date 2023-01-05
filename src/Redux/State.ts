type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likeCount: number
}
type ProfilePageType = {
    posts: PostType[]
}
type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type SidebarType = {}
type RootStateType={
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
    sidebar:SidebarType
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello all!", likeCount: 15},
            {id: 2, message: "Im first time here!", likeCount: 22},
            {id: 3, message: "I Likes apples", likeCount: 12},
            {id: 4, message: "My name is Simon", likeCount: 40},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Anastasiya"},
            {id: 2, name: "Elena"},
            {id: 3, name: "Dmitriy"},
            {id: 4, name: "Yuri"},
            {id: 5, name: "Natali"},
            {id: 6, name: "Natan"},
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "where are u from?"},
        ]
    },
    sidebar: {}
}



