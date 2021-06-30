import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';
import axios from 'axios'
function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect( () => {
    const hardCodedPosts = [
      {
          "id": 1,
          "title": "This is the title of the hardcoded post 1!",
          "body": "This is the first hardcoded post!\nThis is line 2 of the hardcoded post\nThis is the final line!"
      },
      {
          "id": 2,
          "title": "This is the title of the hardcoded post 2!",
          "body": "This is the second hardcoded post!\nThis is line 2 of the hardcoded post\nThis is the final line!"
      },
      {
          "id": 3,
          "title": "This is the title of the hardcoded post 3!",
          "body": "This is the third hardcoded post!\nThis is line 2 of the hardcoded post\nThis is the final line!"
      },
    ]
    setAppState({ loading: true });
    const apiUrl='https://jsonplaceholder.typicode.com/posts';
    axios.get(apiUrl).then((repos) =>
    { 
      const allRepos =repos.data;
      setAppState({ loading: false, posts: allRepos.slice(0,5)} );
    
    });
    //make a get request using fetch() or axios
    
  }, [setAppState]);

  return (
      <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default Home;
