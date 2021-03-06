import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/Header/Header";
import Loading from "../../components/Loader/Loader";
import Bio from "../../components/Bio/Bio";
import Footer from "../../components/Footer/Footer";
import PostGallery from "../../components/PostGallery/PostGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import * as likesAPI from '../../utils/likeApi';
import * as postsAPI from "../../utils/postApi";
import { useParams } from "react-router-dom";
import AddTcForm from "../../components/AddTcForm/AddTcForm";



export default function ProfilePage(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  

  const { username } = useParams();

  async function addLike(postId){
    try {
      const data = await likesAPI.create(postId)
      console.log(data, ' <- the response from the server when we make a like');
      getProfile(); // <- to go get the updated posts with the like
    } catch(err){
      console.log(err)
      setError(err.message)
    }
  }

  async function removeLike(likeId){
    try {
      const data = await likesAPI.removeLike(likeId);
      console.log(data, '<-  this is the response from the server when we remove a like')
      getProfile()
      
    } catch(err){
      console.log(err);
      setError(err.message);
    }
  }

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      console.log(data, " < -- data");
      setLoading(() => false);
      setUser(() => data.user);
      setPosts(() => data.posts);
    } catch (err) {
      console.log(err);
      setError("Profile Doesn't Exist");
    }
  }

  async function handleAddPost(post) {
    try {
      setLoading(true);
      const data = await postsAPI.create(post); 
      console.log(data, " this is response from the server, in handleAddPost");
      setPosts([data.post, ...posts]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function handleDeletePost(postId){
    try{
      setLoading(true);
      const apiResponse = await postsAPI.deletePost(postId);
      if(apiResponse.success){
        const newPosts = posts.filter(post => post._id !== postId);
        setPosts(newPosts)
      }
      setLoading(false);
    }catch(err){
      console.log(err);
      setError(err.message);
    }  
  }

  useEffect(() => {
    getProfile();
  }, []);

  if (error) {
    return (
      <>
        <PageHeader handleLogout={props.handleLogout} user={props.user}/>
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageHeader handleLogout={props.handleLogout} user={props.user}/>
        <Loading />
      </>
    );
  }

  return (
    <>
    <PageHeader handleLogout={props.handleLogout} user={props.user}/>
    <Bio user={user}/>
    <Grid>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 1050 }}>
        <PostGallery
            isProfile={true}
            posts={posts}
            numPhotosCol={4}
            user={props.user}
            addLike={addLike}
            removeLike={removeLike}
            handleDeletePost={handleDeletePost}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <AddTcForm handleAddPost={handleAddPost} /><br/><br/><br/>
    <Footer />
    </>
  );
}

