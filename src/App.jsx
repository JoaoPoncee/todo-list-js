
import { Header } from './components/Header'
import styles from './App.module.css'
import { CreateTask } from './components/CreateTask'

export default function App() {

  return (
    <div className={styles.main}>
      <Header />
      <CreateTask />
    </div>
  )
}

