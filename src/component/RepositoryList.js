import React from "react";
import CommitList from "./CommitList";
function RepositoryList({ repositories, onItemClick, selectedRepository, commits }) {
    return (
        <div className="RepositoryList">
            <h2>Repositories</h2>
            {repositories.map((repo) => ( 
                <div
                    key={repo.id}
                    className="repository"  
                >
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <div className="repository-info">
                        <p>Stars: {repo.stargazers_count}</p>
                        <p>Issues: {repo.open_issues_count}</p>
                    </div> 
                    <button className="ViewCommit" onClick={() => onItemClick(repo.name)}>View Commit</button>
                    {repo.name === selectedRepository && (
                    <CommitList commits={commits} />
                    )} 
                </div>
            ))} 
        </div> 
    );
}
  

export default RepositoryList;
