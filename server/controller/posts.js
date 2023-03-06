import PostMessage from "../Model/postMessage.js";

export const getPosts = async (req,res) =>{
   try {
    const postMessages =  await PostMessage.find();

    res.status(201).send(postMessages);
   } catch (error) {
     res.status(404).send(error.message);
   }
}
export const createPost = async (req,res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
       await PostMessage.save(newPost);
       
       res.status(201).send('Post Created')
    } catch (error) {
        res.status(404).status(error.message);
        }
}