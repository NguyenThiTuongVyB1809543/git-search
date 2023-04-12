import React from "react";

function CommitList({ commits }) {
  const handleCommitClick = (commitUrl) => {
    window.open(commitUrl, "_blank");
  };

  return (
    <div className="CommitList">
        <ul>
            <h3>List of 10 commit latest</h3>
            {commits.map((commit) => (
                <li
                key={commit.sha} 
                >
                    <h5>Author: {commit.commit.author.name}</h5>
                    <p>Message: {commit.commit.message}</p>
                    <p>Commit ID: {commit.sha}</p> 
                    <button
                        onClick={() => handleCommitClick(commit.html_url)} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </button>
                </li>
            ))}
        </ul>
    </div>
    
  );
}

export default CommitList;
