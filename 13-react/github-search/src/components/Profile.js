import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Github from '../services/github';

const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [userRepos, setUserRepos] = useState(null);

    const params = useParams();

    useEffect(() => {
        Github.getUserInfo( params.username ).then((response) => {
            setUserInfo(response.data);
        }); 
        // display it
        Github.getUserRepos( params.username ).then((response) => {
            setUserRepos(response.data);
        });
        // display it
    }, [params.usernamme]);

    return (
        <div>
            Profile for { params.username }
            <div style={{ display: 'flex' }}>
                <UserInfo info={ userInfo } />
                <Repositories repos={ userRepos } />
            </div>
        </div>
    );
};

const UserInfo = (props) => {
    if (props.info === null) {
        return (<div>Loading...</div>);
    }

    const { login, avatar_url, bio, followers, following, public_repos, public_gists } = props.info;

    return (
        <div>
            <h3>Stats for { login }</h3>
            <img src={ avatar_url } alt={ login } width="200" />
            <p>Bio: { bio }</p>
            <p>Followers: { followers }</p>
            <p>Following: { following }</p>
            <p>Public repos: { public_repos }</p>
            <p>Public gists: { public_gists }</p>
        </div>
    );
};

const Repositories = (props) => {
    if (props.repos === null) {
        return (<div>Loading...</div>);
    }

    const userRepos = props.repos.map((r) => (
        <li>
            <a href={ r.html_url } target="_blank">
                { r.name }
            </a>
        </li>
    ));

    return (
        <div>
            <h3>Repos</h3>
            <ul>
                { userRepos }
            </ul>
        </div>
    )
}

export default Profile;