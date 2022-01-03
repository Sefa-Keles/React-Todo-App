import React from "react";
import Header from "./Header"
import TodoList from "./TodoList"
import Action from "./Action"
import "../styles/main.scss"

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.clearItem = this.clearItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteListItem = this.deleteListItem.bind(this);
        this.state = {
            items: ["First Item", "Second Item", "Third Item"]
        }
    }

    componentDidMount(){
        const json = localStorage.getItem("newOne");
        const newItems = JSON.parse(json);

        if(newItems){
            this.setState({
                items:newItems
            })
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.items.length !== this.state.items.length){
            const json = JSON.stringify(this.state.items);
            localStorage.setItem("newOne", json);
        }
    }

    clearItem(){
        this.setState({
            items:[]
        })
    }

    addItem(item){
        if(!item){
            return "Eklemek istediginiz mesaji giriniz!"
        }else if(this.state.items.indexOf(item) > -1){
            return "Ayni elemani ekleyemezsiniz!!!"
        }
        this.setState((prevState) =>{
            return {items:prevState.items.concat(item)}
        })
    }

    deleteListItem(item){
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i
            })
            return {
                items: arr
            }
        })
    }

    render(){
        const app = {
            title: "Todo Application",
            description: "First React App",
        }

        return (
            <div className="container my-5">
                <div className="card">
                    <div className="card-header">
                        <Header/>
                    </div> 
                    <div className="card-body">
                        <TodoList app={app} items={this.state.items} clearItem={this.clearItem} deleteListItem={this.deleteListItem}/>
                    </div>
                    <div className="card-footer">
                        <Action addItem={this.addItem}/>
                    </div>
                </div>
            </div>
        )
    }
}