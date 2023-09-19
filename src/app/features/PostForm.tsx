import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag } from 'react-tag-input';
import { PostService } from 'rodolfohiok-sdk';
import styled from 'styled-components';
import countWordsInMarkdown from '../../core/utils/countWordsInMarkdown';
import info from '../../core/utils/info';
import Button from '../components/Button/Button';
import ImageUpload from '../components/ImageUpload';
import Input from '../components/Input/Input';
import Loading from '../components/Loading';
import MarkdownEditor from '../components/MarkdownEditor';
import TagInput from '../components/TagInput';
import WordPriceCounter from '../components/WordPriceCounter';

interface PostFormProps {
  postId?: number;
}

export default function PostForm(props: PostFormProps) {
  const navigate = useNavigate();

  const [tags, setTags] = useState<Tag[]>([]);
  const [body, setBody] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');

  const [publishing, setPublishing] = useState<boolean>(false);

  async function insertNewPost() {
    const newPost = {
      body,
      title,
      tags: tags.map((tag) => tag.text),
      imageUrl,
    };
    await PostService.insertNewPost(newPost);
    info({
      title: 'Post salvo com sucesso',
      description: 'Você acabou de criar o post',
    });
  }

  async function updateExistingPost(postId: number) {
    const newPost = {
      body,
      title,
      tags: tags.map((tag) => tag.text),
      imageUrl,
    };
    await PostService.updateExistingPost(postId, newPost);
    info({
      title: 'Post atualizado',
      description: 'Você atualizou o post com sucesso',
    });
  }

  function fetchPost(postId: number) {
    PostService.getExistingPost(postId).then((post) => {
      setTitle(post.title);
      setImageUrl(post.imageUrls.default);
      setBody(post.body);
      setTags(
        post.tags.map((tag) => ({
          id: tag,
          text: tag,
        }))
      );
    });
  }

  useEffect(() => {
    if (props.postId) fetchPost(props.postId);
  }, [props.postId]);

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setPublishing(true);
      props.postId
        ? await updateExistingPost(props.postId)
        : await insertNewPost();
      navigate('/');
    } finally {
      setPublishing(false);
    }
  }

  return (
    <PostFormWrapper onSubmit={handleFormSubmit}>
      <Loading show={publishing} />
      <Input
        label="título"
        placeholder="e.g.: como fiquei rico aprendendo react"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <ImageUpload
        label="Thumbnail do post"
        onImageUpload={setImageUrl}
        preview={imageUrl}
      />
      <MarkdownEditor onChange={setBody} value={body} />
      <TagInput
        placeholder="Insira as tags deste post"
        tags={tags}
        onAdd={(tag) => setTags([...tags, tag])}
        onDelete={(index) => setTags(tags.filter((tag, i) => index !== i))}
      />
      <PostFormSubmitWrapper>
        <WordPriceCounter
          wordCount={countWordsInMarkdown(body)}
          pricePerWord={0.1}
        />
        <Button
          type="submit"
          variant="primary"
          label="salvar post"
          disabled={!title || !imageUrl || !body || !tags.length}
        />
      </PostFormSubmitWrapper>
    </PostFormWrapper>
  );
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
