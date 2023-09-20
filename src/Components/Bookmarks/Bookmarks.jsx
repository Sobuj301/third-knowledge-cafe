import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    console.log(bookmarks)
    
    return (
        <div className="md:w-1/3 bg-slate-300 rounded-3xl mt-4">
            <h2 className="text-xl font-bold text-right">Read:{readingTime}</h2>
            <h2 className="text-xl font-bold text-center border-b-2">Short history:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark
                key={bookmark.id}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;