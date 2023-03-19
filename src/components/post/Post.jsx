import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images.pexels.com/photos/15307011/pexels-photo-15307011.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" 
        />
        <div className="postInfo">
         <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur
              </span>  
              <hr /> 
              <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure delectus est cupiditate soluta doloremque magnam debitis, necessitatibus at doloribus quo illum aperiam hic voluptatum rem quasi, enim placeat reiciendis vitae laborum vero saepe exercitationem eum? Eum nostrum temporibus tenetur doloribus eos cum! Aliquam esse dolores, exercitationem magni aliquid amet iure aspernatur atque? Sequi reiciendis nam inventore illo! Aut suscipit totam rerum quod doloribus obcaecati temporibus earum, est eum sequi.
        </p>
    </div>
  )
}
