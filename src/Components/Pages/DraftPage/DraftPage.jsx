import { useEditor, EditorContent } from "@tiptap/react";
import React, { useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
    FaBold,
    FaHeading,
    FaItalic,
    FaListOl,
    FaListUl,
    FaQuoteLeft,
    FaRedo,
    FaStrikethrough,
    FaUnderline,
    FaUndo,
} from "react-icons/fa";
import StoryService from "../../../services/story.service";
import { useNavigate } from "react-router-dom";
import "./DraftPage.css";

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="menuBar">
            <div>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "is_active" : ""}
                >
                    <FaBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive("italic") ? "is_active" : ""}
                >
                    <FaItalic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive("underline") ? "is_active" : ""}
                >
                    <FaUnderline />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive("strike") ? "is_active" : ""}
                >
                    <FaStrikethrough />
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 2 }) ? "is_active" : ""
                    }
                >
                    <FaHeading />
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 3 }) ? "is_active" : ""
                    }
                >
                    <FaHeading className="heading3" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive("bulletList") ? "is_active" : ""}
                >
                    <FaListUl />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive("orderedList") ? "is_active" : ""}
                >
                    <FaListOl />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive("blockquote") ? "is_active" : ""}
                >
                    <FaQuoteLeft />
                </button>
            </div>
            <div>
                <button onClick={() => editor.chain().focus().undo().run()}>
                    <FaUndo />
                </button>
                <button onClick={() => editor.chain().focus().redo().run()}>
                    <FaRedo />
                </button>
            </div>
        </div>
    );
};

const DraftPage = ({ currentUser }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [story, setStory] = useState("");
    const [message, setMessage] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };
    const handlePost = async () => {
        try {
            let response = await StoryService.newStory(title, story, description);
            window.alert(response.data.message);
            navigate("/");
        } catch (e) {
            setMessage(e.response.data);
        }
    };
    const editor = useEditor({
        extensions: [StarterKit, Underline],
        content: ``,

        onUpdate: ({ editor }) => {
            setStory(editor.getHTML());
        },
    });
    return (
        <div className="draft">
            {message && <div className="alert alert-danger">{message}</div>}
            {!currentUser && <div>Login First </div>}
            {currentUser && (
                <div className="draft-container">
                    <label htmlFor="title" className="tex1">Title:</label>
                    <input type="text"  className="frame1" onChange={handleTitle} name="title" placeholder="Title" />

                    <label htmlFor="Subtitle here" className="tex1">Subtitle:</label>
                    <input type="text" className="frame2" onChange={handleDescription} name="description" placeholder="Description" />

                    <label htmlFor="editor" className="tex1">Content:</label>
                    <div class="container">
                        <MenuBar editor={editor} />
                        <EditorContent editor={editor}  />
                        <div className="post">
                            <button onClick={handlePost}>Post Button</button>
                        </div>
                    </div>

                   
                    
                </div>
            )}
        </div>

    );
};

export default DraftPage;