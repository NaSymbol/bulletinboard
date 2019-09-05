import React, { Component } from 'react'
import Note from '../Note/Note'
import FaPlus from 'react-icons/lib/fa/plus'
import './Board.css';

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: []
		}
		this.add = this.add.bind(this)
		this.eachNote = this.eachNote.bind(this)
		this.update = this.update.bind(this)
		this.remove = this.remove.bind(this)
		this.nextId = this.nextId.bind(this)
	}





//  
	add(text) {
		this.setState(prevState => ({
			notes: [
				...prevState.notes,
				{
					id: this.nextId(),
					note: text
				}
			]
		}))
	}


// generates the next ID to use
	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}


// updates the contents of the note given id
	update(newText, i) {
		console.log('updating item at index', i, newText)
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
	}

	// removes the note with id 
	remove(id) {
		console.log('removing item at', id)
		this.setState(prevState => ({
			notes: prevState.notes.filter(note => note.id !== id)
		}))
	}



	// builds the notes from state
	eachNote(note, i) {
		return (
			<Note key={note.id}
				  index={note.id}
				  onChange={this.update}
				  onRemove={this.remove}>
				  {note.note}
		    </Note>
		)
	}


	// renders the board component
	render() {
		return (
			<div className="board">
				{this.state.notes.map(this.eachNote)}
				<button onClick={this.add.bind(null, "New Note")}
						id="add">
					<FaPlus />
				</button>
			</div>
		)
	}
}

export default Board