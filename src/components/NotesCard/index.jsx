import { useNotes } from "../../context/notes-context"


export const NotesCard=({id,title,text,isPinned})=>{

    const {notesDispatch,archive} =useNotes()

    const onPinClick=(id)=>{
       !isPinned ? notesDispatch({
            type:'PIN',
            payload:{id}
        }): notesDispatch({
            type:'UNPIN',
            payload:{id}
        })
    }

    const onArchiveClick=(id)=>{
      notesDispatch({
        type:'ARCHIVE',
        payload:{id}
      })
    }

    const findNotesInArchive=(archive,id)=>{
      return archive.some(note=>note.id===id)
    }

    const isNotesInArchive=findNotesInArchive(archive,id)


    return (
        <div
                  className="border border-neutral-800 p-2 rounded-md w-[300px]"
                  key={id}
                >
                  <div className="flex justify-between border-b-2">
                    <p>{title}</p>
                    <button onClick={()=>onPinClick(id)}>
                      <span className={isPinned ? 'material-icons':'material-icons-outlined'}>
                        push_pin
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p>{text}</p>
                    <div className="ml-auto">
                      <button onClick={()=>onArchiveClick(id)}>
                        <span className={isNotesInArchive ? 'material-icons':'material-icons-outlined'}>
                          archive
                        </span>
                      </button>
                      <button>
                        <span className="material-icons-outlined">
                          delete_outline
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
    )
}