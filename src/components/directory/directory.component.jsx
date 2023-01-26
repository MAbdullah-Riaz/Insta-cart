import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directry = ({categories}) => {
  return (<div className='directory-container'>
    
    {categories.map((category))}

  </div>);
};

export default Directry;
