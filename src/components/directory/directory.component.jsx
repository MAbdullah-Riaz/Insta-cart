import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({ categories }) => {
  return (
    <div className='directories-container'>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
