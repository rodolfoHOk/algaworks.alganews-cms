import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { FileService } from 'rodolfohiok-sdk';


export interface MarkdownEditorProps {
  onChange?: (text: string) => any;
  value?: string;
  readOnly?: boolean;
}

MdEditor.unuse(Plugins.FontUnderline);

const parser = new MarkdownIt();

const defaultRender = parser.renderer.rules.link_open ||
  function (tokens: any, idx: any, options: any, env: any, self: any) {
    return self.renderToken(tokens, idx, options);
  };

parser.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  var aIndex = tokens[idx].attrIndex('target');
  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']);
  } else {
    //@ts-ignore
    tokens[idx].attrs[aIndex][1] = '_blank';
  }
  return defaultRender(tokens, idx, options, env, self);
};

export default function MarkdownEditor(props: MarkdownEditorProps) {
  async function handleImageUpload(file: File) {
    return FileService.upload(file);
  }

  return <MdEditor
    readOnly={props.readOnly}
    onImageUpload={handleImageUpload}
    value={props.value}
    style={{ height: props.readOnly ? 'auto' : 300 }}
    renderHTML={text => parser.render(text)}
    config={{
      view: {
        html: false
      }
    }}
    onChange={({ text }) => props.onChange && props.onChange(text)}
    view={props.readOnly ? {
      menu: false,
      md: false,
      html: true
    } : undefined}
  />
}
