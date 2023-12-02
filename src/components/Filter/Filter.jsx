import { Label, InputStyle, TitleStyle } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(selectFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <Label>
     <TitleStyle>Find contacts by name:</TitleStyle> 
      <InputStyle
        type="text"
        name="filter"
        value={filterPhoneBook}
        title="Enter the name"
        required
        onChange={onChangeFilter}
      />
    </Label>
  );
};
