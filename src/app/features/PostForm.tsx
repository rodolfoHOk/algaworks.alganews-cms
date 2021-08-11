import { FormEvent, useState } from "react";
import { Tag } from "react-tag-input";
import styled from "styled-components"
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";
import PostService from "../../sdk/services/Post.service";
import Button from "../components/Button/Button";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input/Input";
import MarkdownEditor from "../components/MarkdownEditor";
import TagInput from "../components/TagInput";
import WordPriceCounter from "../components/WordPriceCounter";

export default function PostForm() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newPost = {
      body,
      title,
      tags: tags.map(tag => tag.text),
      imageUrl
    }
    const insertedPost = await PostService.insertNewPost(newPost);
    info({
      title: 'Post salvo com sucesso',
      description: 'Você acabou de criar o post com id ' + insertedPost.id
    });
  }

  return <PostFormWrapper onSubmit={handleFormSubmit}>
    <Input
      label="título"
      placeholder="e.g.: como fiquei rico aprendendo react"
      value={title}
      onChange={e => setTitle(e.currentTarget.value)}
    />
    <ImageUpload
      label="Thumbnail do post"
      onImageUpload={setImageUrl}
    />
    <MarkdownEditor onChange={setBody} />
    <TagInput
      placeholder="Insira as tags deste post"
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((tag, i) => index !== i))}
    />
    <PostFormSubmitWrapper>
      <WordPriceCounter
        wordCount={countWordsInMarkdown(body)}
        pricePerWord={0.10}
      />
      <Button
        type="submit"
        variant="primary"
        label="salvar post"
      />
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
