import React from "react";
import { Navbar } from "../../components/Navbar";
import { Fragment, useReducer } from "react";
import { SideBar } from "../../components/Sidbar";
import { notesReducer } from "../../reducers/notesReducers";

const Home = () => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
  };

  const [{ title, text, notes }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

  console.log(notes);
  // const [text, setText] = useState("");
  // const [title, setTitle] = useState("");
  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <SideBar />
        <div>
          <div className="flex flex-col w-[300px] border-red-400 relative">
            <input
              value={title}
              onChange={onTitleChange}
              className="border"
              placeholder="enter title"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="border"
              placeholder="enter text"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="absolute bottom-0 right-0"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6">
            {notes?.length > 0 &&
              notes.map(({ id, title, text }) => (
                <div
                  className="w-56 border border-neutral-800 p-2 rounded-md"
                  key={id}
                >
                  <div className="flex justify-between">
                    <p>{title}</p>
                    <button>
                      <span className="material-symbols-outlined">
                        bookmark
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <p>{text}</p>
                    <div className="ml-auto">
                      <button>
                        <span className="material-symbols-outlined">
                          archive
                        </span>
                      </button>
                      <button>
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
