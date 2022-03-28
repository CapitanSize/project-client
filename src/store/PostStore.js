import {makeAutoObservable} from "mobx";

export default class PostStore {
    constructor() {
        this.types = []
        this.posts = []
        this._selectedType = {}
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

    get Types() {
        return this.types
    }

    get Posts() {
        return this.posts
    }

    get selectedType() {
        return this._selectedType
    }

}