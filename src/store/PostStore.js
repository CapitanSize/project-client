import {makeAutoObservable} from "mobx";

export default class PostStore {
    constructor() {
        this.types = []
        this.posts = []
        this._selectedType = {}
        this._selectedUser = {}
        /*this._likes = {id: 1, count: 56}
        this._comments = [
            {}
        ]*/
        makeAutoObservable(this)
    }
    setTypes(types) {
        this.types = types
    }
    setPosts(posts) {
        this.posts = posts
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    /*setLikes(likes) {
        this._likes = likes
    }
    setComments(comments) {
        this._comments = comments
    }*/

    get Types() {
        return this.types
    }

    get Posts() {
        return this.posts
    }

    get selectedType() {
        return this._selectedType
    }

    /*get Likes() {
        return this._likes
    }

    get Comments() {
        return this._comments
    }*/
}