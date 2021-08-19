import { useCallback, useState } from "react";
import { Post, PostService } from "rodolfohiok-sdk";
import info from "../utils/info";

export default function useSinglePost () {
  const [post, setPost] = useState<Post.Detailed>();
  const [loading, setLoading] = useState(false);

  const fetchPost = useCallback(async function (postId: number) {
    setLoading(true);
    PostService
      .getExistingPost(postId)
      .then(setPost)
      .finally(() => setLoading(false));
  },[]);

  async function publishPost() {
    await PostService.publishExistingPost(post!.id);
    info({
      title: 'Post publicado',
      description: 'Você publicou o post com sucesso'
    });
  }

  return {
    post,
    loading,
    fetchPost,
    publishPost
  }
}
