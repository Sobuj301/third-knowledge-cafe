import { GiSelfLove } from 'react-icons/Gi';

const Blog = ({blog,handleAddBookmarks,handleAsMarks}) => {
    const {cover,author,title,author_img,reading_time,post_date}= blog
    
    return (
        <div className='mb-16 space-y-3'>
         <img className="w-full" src={cover} alt="" />

         <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
               <img className="w-32 h-32 rounded-full" src={author_img} alt="" />
               <div>
                <h2>{author}</h2>
                <h2>{title}</h2>
                <p>{post_date}</p>
               </div>
            </div>
            <div className='md:flex gap-4'>
                  <h2 className=''>{reading_time} ages</h2>
                  <button onClick={()=>handleAddBookmarks(blog)} ><GiSelfLove></GiSelfLove></button>
            </div>
         </div>
         <button onClick={()=>handleAsMarks(reading_time)} className='text-orange-600 underline'>Mark as read</button>
        </div>
    );
};

export default Blog;