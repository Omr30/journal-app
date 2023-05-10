import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* NothinSelexted */}

      {/* <NothingSelectedView /> */}
      <NoteView />

      {/* NoteView */}
    </JournalLayout>
  )
}
