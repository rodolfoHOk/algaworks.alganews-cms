import { useCallback, useState } from "react";
import { User } from "rodolfohiok-sdk";
import UserService from "../../sdk/services/User.service";

export default function useSingleEditor() {
  const [editor, setEditor] = useState<User.EditorDetailed>();

  const fetchEditor = useCallback(async function (editorId: number) {
    UserService.getExistingEditor(editorId).then(setEditor);
  },[]);

  return {
    editor,
    fetchEditor
  }
}
