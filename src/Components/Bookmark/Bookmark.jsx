
const Bookmark = ({bookmark}) => {
    const {author,author_img,title} = bookmark
    
    return (
        <div className="text-2xl bg-slate-200 m-4 p-4 rounded-2xl">
            <h2>{author}</h2>
            <img className="w-32 h-32 rounded-3xl" src={author_img} alt="" />
        </div>
    );
};

export default Bookmark;