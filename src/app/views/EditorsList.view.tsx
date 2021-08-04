import DefaultLayout from '../layouts/Default/Default.layout';
import usePageTitle from '../../core/hooks/usePageTitle';
import EditorsList from '../features/EditorsList';

export default function EditorsListView() {
  usePageTitle('Lista de Editores');

  return <DefaultLayout>
    <EditorsList />
  </DefaultLayout>
}
