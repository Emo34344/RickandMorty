import { FlatList, StyleSheet, Text, View } from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import {changeParams, getCharacterList, loadMoreCharacters} from '../../store/actions/charactersAction'
import {screenStyle} from '../../styles/screensStyle'
import Spinner from '../../components/UI/spinner'
import characterCard from '../../components/characters/characterCard'


const Characters = () => {
  const { characterList, pending, params } = useSelector(
    state => state.characters
  )

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));
  },[params]);

  const handleLoadMore = () => {
    let page = params.page + 1;
    dispatch(changeParams({ page: page }));
    dispatch(loadMoreCharacters({ params }));
  }
}






return (
  <View style={screenStyle.container}>
    {
      pending ? (
        <Spinner />
      ): (
        <FlatList
          data={characterList}
          renderItem={({ item }) => <CharacterCard item={item} />}
        />
      )
    }
  </View>
)


export default Characters

const styles = StyleSheet.create({})