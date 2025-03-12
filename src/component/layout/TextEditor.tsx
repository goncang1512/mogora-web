import { Editor } from "@tinymce/tinymce-react";
import { InitOptions } from "@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor";
import React, { useRef } from "react";

interface EditorProps extends InitOptions {
  content: string;
  setContent: any;
  menuBar?: boolean;
  height?: number | string;
}

function TextEditor({
  content,
  setContent,
  menuBar = true,
  height = "86.8vh",
  ...props
}: EditorProps) {
  const editorRef = useRef<any>(null);
  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };
  return (
    <Editor
      apiKey={"aiew0dxn0no5dtl9ecqq4gv7s4z0r0y83fctbtgovanu9dd2"}
      value={content}
      onEditorChange={handleEditorChange}
      onInit={(_evt, editor) => (editorRef.current = editor)}
      init={{
        height: height,
        menubar: menuBar,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
          "media",
          "underline",
        ],
        placeholder: "Write subjects matter in here",
        toolbar:
          "undo redo | blocks fontfamily | " +
          "bold italic underline forecolor link code | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat image media | fullscreen help",
        content_style: `
                  body { 
                    font-family: Helvetica, Arial, sans-serif; 
                    font-size: 14px; 
                  }
                `,
        font_formats:
          "Arial=arial,helvetica,sans-serif;" +
          "Courier New=courier new,courier,monospace;" +
          "Georgia=georgia,palatino,serif;" +
          "Tahoma=tahoma,arial,helvetica,sans-serif;" +
          "Times New Roman=times new roman,times,serif;" +
          "Verdana=verdana,geneva,sans-serif;",
        inline: false,
        inline_boundaries: false,
        highlight_on_focus: false,
        ...props,
      }}
    />
  );
}

export default TextEditor;
