import React from 'react';
import * as TI from './TagInput.styles';
import { ReactTagsProps, Tag, WithContext } from 'react-tag-input';

export interface TagInputProps {
  placeholder: string;
  onAdd: (tag: Tag) => any;
  onDelete: (i: number) => any;
  tags: Tag[];
}

const KeyCodes = {
  comma: 188,
  enter: 13,
  tab: 9,
};

const ReactTagInput = WithContext as unknown as React.FC<ReactTagsProps>;

export default function TagInput(props: TagInputProps) {
  return (
    <TI.Wrapper>
      <ReactTagInput
        placeholder={props.placeholder}
        handleAddition={props.onAdd}
        handleDelete={props.onDelete}
        tags={props.tags}
        allowDragDrop={false}
        autofocus={false}
        delimiters={[KeyCodes.comma, KeyCodes.enter, KeyCodes.tab]}
      />
    </TI.Wrapper>
  );
}
