
import React from 'react';
import PropTypes from 'prop-types';

const Jumbo = (props) => (
    <div className="row text-center">
        <div className="col-sm">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                <h1 className="display-4">{props.title}</h1>
                    <p className="lead">This is a clicker made with React! (In case you hadn't guessed.)</p>
                </div>
            </div>
        </div>
    </div>
);

Jumbo.defaultProps = {
    title: 'Title'
};

Jumbo.propTypes = {
    title: PropTypes.string
};

export default Jumbo;