import React from 'react';
import LayoutComponent from './layout.component';
import ReadUserResumes from '../Resume/ReadUpdate/readUserResumes.component'


const HomeComponent = () => {

        return(
           <ReadUserResumes/>
        )
}

export default LayoutComponent(HomeComponent);