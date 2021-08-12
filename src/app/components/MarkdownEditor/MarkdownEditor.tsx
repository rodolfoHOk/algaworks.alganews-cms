import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

export interface MarkdownEditorProps {
  onChange?: (text: string) => any;
  value?: string;
  readOnly?: boolean;
}

MdEditor.unuse(Plugins.FontUnderline);

const parser = new MarkdownIt();

export default function MarkdownEditor(props: MarkdownEditorProps) {
  return <MdEditor
    readOnly={props.readOnly}
    value={props.value}
    style={{ height: props.readOnly ? 'auto' : 300 }}
    renderHTML={text => parser.render(text)}
    onChange={({ text }) => props.onChange && props.onChange(text)}
    view={props.readOnly ? {
      menu: false,
      md: false,
      html: true
    } : undefined}
  />
}
