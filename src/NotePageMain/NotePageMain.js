import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import Context from '../Context'
import { findNote } from '../notes-helpers'
import PropTypes from 'prop-types'

export default class NotePageMain extends React.Component {
  static propTypes = {
    match: PropTypes.shape ({
      params: PropTypes.func.isRequired
    })
  }
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = Context

  handleDeleteNote = note_id => {
    this.props.history.push(`/`)
  }

  render() {
    const { notes } = this.context
    const { note_id } = this.props.match.params
    const note = findNote(notes, note_id) || { content: '' }
    return (
      <section className='NotePageMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}

