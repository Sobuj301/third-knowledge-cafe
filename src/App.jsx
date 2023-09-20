
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmarks = (blog)=> {
        const newBookmarks =[...bookmarks,blog];
        setBookmarks(newBookmarks)
  }

  const handleAsMarks = (time)=>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex gap-16'>
      <Blogs
      handleAddBookmarks={handleAddBookmarks}
      handleAsMarks={handleAsMarks}
      ></Blogs>
      <Bookmarks
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
    </>
  )
}

export default App
