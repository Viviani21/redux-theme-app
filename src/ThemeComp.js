import React from 'react';
import { connect } from 'react-redux';


const ThemeComp = ({ theme,toggleTheme }) => {
    const handleThemeChange = () => {
        toggleTheme();
    };

    return (
       <div>
       <div className={`App ${theme}`}>
            <h1>{theme}</h1>
            <input type="checkbox" id="darkmode-toggle" />
             <label for="darkmode-toggle" onClick={handleThemeChange}>
                {theme === 'LIGHT' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}</label>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aperiam similique blanditiis aliquam quas nihil delectus,
              numquam eaque vitae ad ducimus ullam mollitia minima ea 
              hic inventore deleniti unde doloribus reprehenderit?
           </p>
        </div>
       </div>
       
    );
};

const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTheme: () =>
            dispatch({ type: 'TOGGLE_THEME' })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThemeComp);