import React, {Component} from 'react';

export default class GameSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            app: [],
            sort: '',
            genre: '',
            error: null
        }
    }
    handleGenre(genre){
        this.setState({
            genre
        })
    }
    handleSort(sort){
        this.setState({
            sort
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const baseUrl = 'http://localhose:8000/apps'
        const params = [];
        if(this.state.sort){
            params.push(`search=${this.state.sort}`);
        }
        if(this.state.genre){
            params.push(`sort=${this.state.sort}`);
        }
        const query = params.join('&');
        const url = `${baseUrl}?${query}`;

        fetch(url)
        .then(res => {
            if(!res.ok){
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then(data => {
            this.setState({
                apps: data,
                error: null //<==== lol who invited her? 
            })
        })
        .catch(error => {
            this.setState({
                error: 'Something went wrong. Its probably you'
            })
        })
    }
    render(){
        const apps = this.state.apps.map((app, i) => {
            return <App {...app} key={i}/>
        })
        return(
            <main className='app'>
                <h1>#Games!</h1>
                <div className='search'>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="search">Genre search: </label>
                        <select id="sort" name="sort" onChange={e => this.handleSort}>
                            <option value=" ">None</option>
                            <option value="rating">Rating</option>
                            <option value="app">App</option>
                        </select>
                        <select id="genre" name="genre" onChange={e => this.handleGenre}>
                            <option value=" ">None</option>
                            <option value="Action">Action</option>
                            <option value="Puzzle">Puzzle</option>
                            <option value="Stragity">Stragity</option>
                            <option value="Casual">Casual</option>
                            <option value="Arcade">Arcade</option>
                            <option value="Card">Card</option>
                        </select>
                    </form>
                </div>
                {apps}
            </main>
        )
    }
}