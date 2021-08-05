import EditorProfile from "../features/EditorProfile";
import DefaultLayout from "../layouts/Default";

export default function EditorProfileView() {
  return <DefaultLayout>
    <EditorProfile
      profile={{
        name: "Ana Castilho",
        description: "criadora de conteúdo há 2 meses",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        editorId: 1
      }}
      bio="Ana Castillo é especialista em recrutamento de desenvolvedores e ama escrever dicas para ajudar os devs a encontrarem a vaga certa para elas. Atualmente tem uma empresa de Recruitment e é redatora no alga content"
      personalInfo={{
        city: "Vila Velha",
        state: "Espírito Santo",
        phone: "+55 27 91234-5678",
        email: "ana.castilho@redacao.algacontent.com",
        birthDate: "26 de dezembro de 1997 (22 anos)"
      }}
      skills={[
        {
          title: "tech recruiting",
          progress: 95
        },
        {
          title: "coaching",
          progress: 75
        },
        {
          title: "java",
          progress: 50
        },
      ]}
      words={[20345, 140432, 2434423]}
      hidePersonalData={false}
    />
  </DefaultLayout>
}
