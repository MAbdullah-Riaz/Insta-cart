import './categories.styles.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const Categories = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((title) => {
        return <DirectoryItem key={title.id} titles={title} />;
      })}
    </div>
  );
};

export default Categories;
