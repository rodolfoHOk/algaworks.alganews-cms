import { useState } from "react";
import { Tag } from "react-tag-input";
import styled from "styled-components"
import Button from "../components/Button/Button";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input/Input";
import MarkdownEditor from "../components/MarkdownEditor";
import TagInput from "../components/TagInput";
import WordPriceCounter from "../components/WordPriceCounter";

export default function PostForm() {
  const [tags, setTags] = useState<Tag[]>([]);

  return <PostFormWrapper>
    <Input label="título" placeholder="e.g.: como fiquei rico aprendendo react" />
    <ImageUpload label="Thumbnail do post" />
    <MarkdownEditor />
    <TagInput
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((tag, i) => index !== i))}
    />
    <PostFormSubmitWrapper>
      <WordPriceCounter wordCount={10} pricePerWord={0.25} />
      <Button type="submit" variant="primary" label="salvar post" />
    </PostFormSubmitWrapper>
  </PostFormWrapper>
}

const PostFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
    `;

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
