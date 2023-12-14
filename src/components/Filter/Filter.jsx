import { useDispatch, useSelector } from 'react-redux';
import { LabelSearch, InputSearch } from './Filter.styled';
import { filterSet, getFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch;
  const filterPhonebook = useSelector(getFilter);

  const onChangeFilter = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <LabelSearch>
      Find contacts by name:
      <InputSearch
        type="text"
        name="filter"
        value={filterPhonebook}
        title="Enter the name"
        required
        onChange={onChangeFilter}
      />
    </LabelSearch>
  );
};
