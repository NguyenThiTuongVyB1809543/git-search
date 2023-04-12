import React, { useState } from "react";
import axios from "axios";
import RepositoryList from "./RepositoryList";
function SearchResult({ user }) {
    // console.log(user);
    const [repositories, setRepositories] = useState([]);
    const [selectedRepository, setSelectedRepository] = useState(null); 
    const [commits, setCommits] = useState([]);
    const handleRepositoryClick = async (repoName) => {
        const response = await axios.get(
          `https://api.github.com/repos/${user.login}/${repoName}/commits`
        );
        // Hiển thị 10 commit gần nhất
        const commits = response.data.slice(0, 10);
        setCommits(commits);
        setSelectedRepository(repoName);
    }; 
    const handleUserClick = async () => {
        const response = await axios.get(
        `https://api.github.com/users/${user.login}/repos`
        );
        setRepositories(response.data);
    };    
  return ( 
    <div className="SearchResult">
        <h4>{user.login}</h4>
        <img src={user.avatar_url} alt={`${user.login} avatar`} />
        <button className="ViewRepositories" onClick={handleUserClick}>View Repositories</button>
        <RepositoryList
            repositories={repositories}
            onItemClick={handleRepositoryClick}
            selectedRepository={selectedRepository}
            commits={commits}
        />
        <p>-----------------------------------------------------------------------</p>

    </div> 
  );
}

export default SearchResult;
