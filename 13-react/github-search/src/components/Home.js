import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _ from 'underscore';

const Home = () => {
    const navigate = useNavigate();

    const _gotoRandomUser = () => {
        const students = ['dommich95','Foyoman','Bissmark','jchamnankool','anuprodneymartin','ajunx8','tsharliz-Joma','eliasskhoury','karandwivedi94', 'sakuLLukas', 'Jonathanchan197', 'tombryson', 'dkdam', 'Yasmin-A95', 'Nelf-dev', 'GuilhermeDutraCode'];
        const randomStudent = _(students).sample();
        navigate(`/profile/${ randomStudent }`);
    };

    return (
        <div>
            <h1>Github Search</h1>

            <Link to="/search">
                <button>
                    Search for a user
                </button>
            </Link>

            <button onClick={ _gotoRandomUser }>Random user</button>
        </div>
    )
};

export default Home;

